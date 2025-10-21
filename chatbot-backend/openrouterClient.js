// Use built-in fetch for Node 18+, or import from 'node-fetch' for older versions
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function queryDeepSeekR1(userMessage, conversationHistory = []) {
  try {
    // Build messages array with system prompt and conversation history
    const messages = [
  {
    role: 'system',
    content: `You are a comprehensive Indian career guidance chatbot.

List all possible streams after 10th standard in India, including but not limited to Science, Commerce, Arts/Humanities, Polytechnic, Diploma,Vocational, ITI (Industrial Training Institute), Diploma courses, and other optional streams.

For each stream, provide a brief summary, common subjects, and typical career outcomes.

When the user asks "What streams are available after 10th?" or similar, always give the **full list** and brief info for each, not just Science, Commerce, and Arts.`
  },
  ...conversationHistory,
  {
    role: 'user',
    content: userMessage
  }
];


    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': ["http://localhost:4200","pkfor10th.vercel.app"], // Your site URL
        'X-Title': 'Career Guidance Chatbot' // Your app name
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1-distill-qwen-32b', // Free DeepSeek R1 model
        messages: messages,
        temperature: 0.7,
        max_tokens: 5000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenRouter API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    
    // Extract the assistant's reply
    const reply = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
    
    return reply;

  } catch (error) {
    console.error('OpenRouter API Error:', error);
    throw error;
  }
}
