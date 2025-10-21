import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService, ChatMessage } from '../../services/chatbot.service';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, Nl2brPipe],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, OnDestroy {
  messages: ChatMessage[] = [];
  userInput: string = '';
  isLoading: boolean = false;
  isChatOpen: boolean = false;
  private subscription?: Subscription;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {
    this.subscription = this.chatbotService.messages$.subscribe(messages => {
      this.messages = messages;
      this.scrollToBottom();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  sendMessage(): void {
    if (!this.userInput.trim() || this.isLoading) return;

    const message = this.userInput.trim();
    this.userInput = '';
    this.isLoading = true;

    this.chatbotService.sendMessage(message).subscribe({
      next: (response: { reply: any; suggestions: any; }) => {
        this.chatbotService.addBotMessage(response.reply, response.suggestions);
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error:', error);
        this.chatbotService.addBotMessage(
          'Sorry, I encountered an error. Please try again.',
          ['Try again', 'Start over']
        );
        this.isLoading = false;
      }
    });
  }

  sendSuggestion(suggestion: string): void {
    this.userInput = suggestion;
    this.sendMessage();
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  clearChat(): void {
    if (confirm('Are you sure you want to clear the conversation?')) {
      this.chatbotService.clearMessages();
    }
  }

  scrollToBottom(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setTimeout(() => {
        const chatMessages = document.querySelector('.chat-messages');
        if (chatMessages) {
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }
      }, 100);
    }
  }
}
