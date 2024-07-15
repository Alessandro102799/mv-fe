import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

interface Avatar {
  username: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  users: Array<Avatar> = [
    { username: 'Alessandro' },
    { username: 'Badagliacco' },
    { username: 'Francesco' },
    { username: 'Massimo' },
    { username: 'Paolo' },
    { username: 'Calogero' },
    { username: 'Carlo' },
    { username: 'Suca' },
    { username: 'Alessandro' },
    { username: 'Badagliacco' },
    { username: 'Francesco' },
    { username: 'Massimo' },
    { username: 'Paolo' },
    { username: 'Alessandro' },
    { username: 'Badagliacco' },
    { username: 'Francesco' },
    { username: 'Massimo' },
    { username: 'Paolo' },
    { username: 'Alessandro' },
    { username: 'Badagliacco' },
    { username: 'Francesco' },
    { username: 'Massimo' },
    { username: 'Paolo' }
  ];

  subscribers: Array<Avatar> = [];

  provisionings: Array<Avatar> = [
    { username: 'Alessandro' },
    { username: 'Badagliacco' },
    { username: 'Francesco' },
    { username: 'Massimo' },
    { username: 'Paolo' },
    { username: 'Calogero' },
    { username: 'Carlo' },
    { username: 'Suca' },
    { username: 'Alessandro' },
    { username: 'Badagliacco' },
    { username: 'Francesco' },
    { username: 'Massimo' },
    { username: 'Paolo' },
    { username: 'Alessandro' },
    { username: 'Badagliacco' },
    { username: 'Francesco' },
    { username: 'Massimo' },
    { username: 'Paolo' }
  ];

  
}
