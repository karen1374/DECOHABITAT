import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  titulo = "decohabit";
  slogan = " Diseñamos espacios que inspiran vida."
  bubbles: any[] = [];

  ngOnInit(): void {
    this.generateBubbles();
  }

  generateBubbles(): void {
    const numBubbles = 25; // Número de burbujas
    this.bubbles = [];

    for (let i = 0; i < numBubbles; i++) {
      this.bubbles.push({
        width: Math.random() * 100 + 'px',
        height: Math.random() * 100 + 'px',
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
      });
    }
  }

  getBubbleStyles(bubble: any): object {
    return {
      'width': bubble.width,
      'height': bubble.height,
      'top': bubble.top,
      'left': bubble.left
    };
  }

}
