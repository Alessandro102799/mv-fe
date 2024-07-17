import { Component } from '@angular/core';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.scss'
})
export class DomainComponent {

  //colonne della table per mostrare i subscriber online
  displayedColumns: string[] = ['domain'];
  
  //elementi per adesso mockati da passare come paramentro al component della table per popolare la tabella
  elements: any[] = [
    {domain: 'Google'},
    {domain: 'Firefox'},
    {domain: 'Internet Explorer'},
    {domain: 'Brave'},
  ];

}
