import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

export interface ChatResponse {
  reply: string;
  suggestions: string[];
  source?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://localhost:3001/api/chat';
  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  public messages$ = this.messagesSubject.asObservable();
  private sessionId = this.generateSessionId();

  constructor(private http: HttpClient) {
    this.addBotMessage(
      "Hello! 👋 I'm your AI Career Guidance Assistant powered by Guidex. I'm here to help you choose the right stream after 10th class. What would you like to know?",
      ['Tell me about streams', 'How do I choose?', 'Career options']
    );
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  sendMessage(message: string): Observable<ChatResponse> {
    this.addUserMessage(message);
    
    return this.http.post<ChatResponse>(this.apiUrl, { 
      message,
      sessionId: this.sessionId 
    });
  }

  addUserMessage(text: string): void {
    const messages = this.messagesSubject.value;
    messages.push({
      text,
      sender: 'user',
      timestamp: new Date()
    });
    this.messagesSubject.next(messages);
  }

  addBotMessage(text: string, suggestions?: string[]): void {
    const messages = this.messagesSubject.value;
    messages.push({
      text,
      sender: 'bot',
      timestamp: new Date(),
      suggestions
    });
    this.messagesSubject.next(messages);
  }

  clearMessages(): void {
    this.http.post('http://localhost:3001/api/chat/clear', { 
      sessionId: this.sessionId 
    }).subscribe();
    
    this.messagesSubject.next([]);
    this.sessionId = this.generateSessionId();
    
    this.addBotMessage(
      "Conversation cleared! How can I help you with stream selection?",
      ['Tell me about streams', 'How do I choose?', 'Career options']
    );
  }
}
