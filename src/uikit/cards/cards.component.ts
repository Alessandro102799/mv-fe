import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

interface Avatar {
  username: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() users: Array<Avatar> = [];
  @Input() subscribers: Array<Avatar> = []  
  @Input() provisionings: Array<Avatar> = [];

  widthOfPage = 0;

    //listener che sta in ascolto ogni volta che ridimensioniamo la pagina, in modo tale da renderle il menu responsive
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.widthOfPage = window.innerWidth;
  }
 
}

