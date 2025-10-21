// This file uses ES Module (import/export) syntax to match your package.json setting: "type": "module".

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// NOTE: Adjust the path below if your openrouterClient.js file is in a different location 
import { queryDeepSeekR1 } from './openrouterClient.js'; 

dotenv.config();

const app = express();
// Keep PORT for local development only
const PORT = process.env.PORT || 3001; 

// Middleware
app.use(cors({
  origin: ["http://localhost:4200","pkfor10th.vercel.app"], // Your frontend URL
  credentials: true
}));
app.use(express.json());

// Store conversation history per session (WARNING: Will reset frequently on Vercel)
const conversationHistories = new Map();

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId = 'default' } = req.body;
    
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Received message:', message);

    // Get or create conversation history for this session
    if (!conversationHistories.has(sessionId)) {
      conversationHistories.set(sessionId, []);
    }
    
    // 🛑 FIX APPLIED HERE: Changed 'conversationHistations' to 'conversationHistories' 🛑
    const history = conversationHistories.get(sessionId);

    // Call OpenRouter DeepSeek R1
    const aiReply = await queryDeepSeekR1(message, history);
    
    console.log('AI Reply:', aiReply);

    // Update conversation history
    history.push(
      { role: 'user', content: message },
      { role: 'assistant', content: aiReply }
    );

    // Keep only last 10 messages to avoid token limits
    if (history.length > 10) {
      conversationHistories.set(sessionId, history.slice(-10));
    }

    // Generate contextual suggestions based on response
    const suggestions = generateSuggestions(aiReply, message);

    return res.json({
      reply: aiReply,
      suggestions: suggestions,
      source: 'deepseek-r1'
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process your request. Please try again.',
      details: error.message 
    });
  }
});

// Generate smart suggestions based on context
function generateSuggestions(aiReply, userMessage) {
  const lowerReply = aiReply.toLowerCase();

  // Stream-specific suggestions
  if (lowerReply.includes('science')) {
    return ['Tell me about MPC', 'Tell me about BiPC', 'Engineering careers'];
  }
  if (lowerReply.includes('commerce')) {
    return ['How to become CA?', 'Business careers', 'BBA colleges'];
  }
  if (lowerReply.includes('arts') || lowerReply.includes('humanities')) {
    return ['Law careers', 'Civil Services preparation', 'Journalism'];
  }

  // Default suggestions
  return [
    'Tell me about Science stream',
    'Tell me about Commerce stream', 
    'Tell me about Arts stream'
  ];
}

// Clear conversation history endpoint
app.post('/api/chat/clear', (req, res) => {
  const { sessionId = 'default' } = req.body;
  conversationHistories.delete(sessionId);
  res.json({ message: 'Conversation history cleared' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Career Chatbot API running',
    model: 'DeepSeek R1 via OpenRouter'
  });
});

// 🌟 VERCEL EXPORT: Must use 'export default' in ESM 🌟
export default app; 

// Local development server listener (ignored by Vercel)
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Using DeepSeek R1 via OpenRouter`);
  });
}