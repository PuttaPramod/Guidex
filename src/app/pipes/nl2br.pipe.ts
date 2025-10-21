import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'nl2br',
  standalone: true
})
export class Nl2brPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return value;
    
    // Handle line breaks and formatting
    let formatted = value
      // Convert **text** to <strong>text</strong> for bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert *text* to <em>text</em> for italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Convert • bullet points and make them list items
      .replace(/•\s*/g, '<li>')
      .replace(/\n(?=\d+\.)/g, '</li>\n')
      // Convert numbered lists (1., 2., etc.)
      .replace(/(\d+\.\s)/g, '<li>$1')
      // Convert line breaks \n to <br>
      .replace(/\n/g, '<br>')
      // Convert ### heading syntax
      .replace(/###\s+(.*?)(?=<br>|$)/g, '<h4>$1</h4>')
      // Convert ## heading syntax
      .replace(/##\s+(.*?)(?=<br>|$)/g, '<h3>$1</h3>')
      // Convert # heading syntax
      .replace(/#\s+(.*?)(?=<br>|$)/g, '<h2>$1</h2>')
      // Remove extra spaces
      .trim();
    
    // Sanitize HTML and mark as safe for Angular
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}
