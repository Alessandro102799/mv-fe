import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service';
import { CreateDeleteModel } from '../../../../../shared/model/button-create-delete/create-delete.model';
import { GetSubscribers } from '../../../../store/actions/subscribers/subscribers.action';

@Component({
  selector: 'app-list-subscribers',
  templateUrl: './list-subscribers.component.html',
  styleUrl: './list-subscribers.component.scss'
})
export class ListSubscribersComponent implements OnInit{
  constructor(private readonly router: Router, private readonly store: Store, private snackbar: SnackbarService){}


  createOrDelete(event: CreateDeleteModel): void {
    if(event.create) {
      this.router.navigate([`${this.router.url}/create`]);
    } else if(event.delete) {
      // this.store.dispatch(DeleteDomain({ids: this.ids}));
      // this.startDelete = true;
      // this.ids = []
    }
  }

  ngOnInit(): void {
      this.store.dispatch(GetSubscribers())
  }
}
