import { Component, Input } from '@angular/core';
import { CreateDeleteModel } from '../../../../../shared/model/button-create-delete/create-delete.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.scss'
})
export class DomainComponent {

  constructor(private readonly router: Router){}

  //colonne della table per mostrare i subscriber online
  displayedColumns: string[] = ['domain'];
  
  //elementi per adesso mockati da passare come paramentro al component della table per popolare la tabella
  elements: any[] = [
    {domain: 'Google'},
    {domain: 'Firefox'},
    {domain: 'Internet Explorer'},
    {domain: 'Brave'},
  ];

  createOrDelete(event: CreateDeleteModel): void {
    if(event.create) {
      this.router.navigate([`${this.router.url}/create`]);
    } else {
      console.log('goto to delete')
    }
  }

}
