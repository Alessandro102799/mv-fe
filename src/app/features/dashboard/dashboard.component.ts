import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

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

  //colonne della table per mostrare i subscriber online
  displayedColumns: string[] = ['status', 'username', 'domain', 'contact', 'expires', 'userAgent'];
  
  //elementi per adesso mockati da passare come paramentro al component della table per popolare la tabella
  elements$: Observable<any[]> = of([]);

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
