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

  //colonne della table per mostrare i subscriber online
  displayedColumns: string[] = ['status', 'username', 'domain', 'contact', 'expires', 'userAgent'];
  
  //elementi per adesso mockati da passare come paramentro al component della table per popolare la tabella
  elements: any[] = [
    {username: 'Alessandro', domain: 'Via Aloi', contact: '3802091212', expires: '14/12/2021', userAgent: 'Pippo'},
    {username: 'Carlo', domain: 'Belmonte Chiavelli', contact: '43423234212', expires: '07/11/2021', userAgent: 'Pluto'},
    {username: 'Cristian', domain: 'Via Trapani', contact: '22344112231', expires: '14/12/2021', userAgent: 'Ciao'},
    {username: 'Francesco', domain: 'Belmonte Libertà', contact: '34343334333', expires: '07/11/2021', userAgent: 'Non è vero'},
    {username: 'Massimo', domain: 'Via Notarbartolo', contact: '13213213232', expires: '14/12/2021', userAgent: 'Topolino'},
    {username: 'Badagliacco', domain: 'Via Messina', contact: '123213212', expires: '14/12/2021', userAgent: 'Paperino'},
    {username: 'Licata', domain: 'Avola', contact: '3802091123213213212', expires: '07/11/2021', userAgent: 'Cicciopuddo'},
  ];

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
