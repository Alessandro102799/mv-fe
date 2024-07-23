import { Component, Input, OnInit } from '@angular/core';
import { CreateDeleteModel } from '../../../../../shared/model/button-create-delete/create-delete.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetDomains } from '../../../../store/actions/domain/domain.action';
import { Observable } from 'rxjs';
import { ReadDomainModel } from '../../../../../shared/model/domain/read.domain.model';
import { selectDomains } from '../../../../store/selectors/domain/domain.selector';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.scss'
})
export class DomainComponent implements OnInit {

  constructor(private readonly router: Router, private readonly store: Store){}

  //colonne della table per mostrare i subscriber online
  displayedColumns: string[] = ['domain'];
  
  //elementi per adesso mockati da passare come paramentro al component della table per popolare la tabella
  readonly domains$: Observable<ReadDomainModel[]> = this.store.select(selectDomains);

  createOrDelete(event: CreateDeleteModel): void {
    if(event.create) {
      this.router.navigate([`${this.router.url}/create`]);
    } else {
      console.log('goto to delete')
    }
  }

  ngOnInit(): void {
    this.store.dispatch(GetDomains())
  }

}
