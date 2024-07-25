import { Component, Input, OnInit } from '@angular/core';
import { CreateDeleteModel } from '../../../../../shared/model/button-create-delete/create-delete.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DeleteDomain, GetDomains } from '../../../../store/actions/domain/domain.action';
import { Observable } from 'rxjs';
import { ReadDomainModel } from '../../../../../shared/model/domain/read.domain.model';
import { selectDomains } from '../../../../store/selectors/domain/domain.selector';
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.scss'
})
export class DomainComponent implements OnInit {

  constructor(private readonly router: Router, private readonly store: Store, private snackbar: SnackbarService){}

  //colonne della table per mostrare i subscriber online
  displayedColumns: string[] = ['domain', 'branch'];

  //array per memorizzare array di ids da eliminare
  ids: Array<number> = [];

  //varaibile che serve per gestire la delete
  startDelete: boolean = false;
  
  //elementi per adesso mockati da passare come paramentro al component della table per popolare la tabella
  readonly domains$: Observable<ReadDomainModel[]> = this.store.select(selectDomains);

  createOrDelete(event: CreateDeleteModel): void {
    if(event.create) {
      this.router.navigate([`${this.router.url}/create`]);
    } else if(event.delete) {
      this.store.dispatch(DeleteDomain({ids: this.ids}));
      this.startDelete = true;
      this.ids = []
    }
  }

  ngOnInit(): void {
    this.store.dispatch(GetDomains())
  }

  deleteElemets(ids: Array<number>): void {
    this.startDelete = false;
    this.ids = ids;
  }

}
