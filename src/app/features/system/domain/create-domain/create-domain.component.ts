import { Component } from '@angular/core';
import { MutateDomainModel } from '../../../../../shared/model/domain/mutate.domain.model';
import { Store } from '@ngrx/store';
import { CreateDomain } from '../../../../store/actions/domain/domain.action';

@Component({
  selector: 'app-create-domain',
  templateUrl: './create-domain.component.html',
  styleUrl: './create-domain.component.scss'
})
export class CreateDomainComponent {
  constructor(private readonly store: Store){}

  create(domain: MutateDomainModel): void {
    this.store.dispatch(CreateDomain({domain}));
  }
}
