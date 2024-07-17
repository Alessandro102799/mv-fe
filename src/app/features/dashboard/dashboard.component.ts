import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

interface Avatar {
  username: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private readonly store: Store) {}

  users: Array<Avatar> = [
    { username: 'Alessandro' },
    { username: 'Badagliacco' },
    { username: 'Francesco' },
    { username: 'Massimo' },
    { username: 'Paolo' },
    { username: 'Calogero' },
    { username: 'Carlo' },
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
