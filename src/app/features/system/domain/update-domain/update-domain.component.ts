import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectDomainById } from '../../../../store/selectors/domain/domain.selector';
import { Observable, of } from 'rxjs';
import { ReadDomainModel } from '../../../../../shared/model/domain/read.domain.model';
import { MutateDomainModel } from '../../../../../shared/model/domain/mutate.domain.model';
import { UpdateDomain } from '../../../../store/actions/domain/domain.action';

@Component({
  selector: 'app-update-domain',
  templateUrl: './update-domain.component.html',
  styleUrl: './update-domain.component.scss'
})
export class UpdateDomainComponent implements OnInit{
  constructor(private route: ActivatedRoute, private store: Store) {}

  id: string | null = '';

  domain$: Observable<ReadDomainModel> = of();

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.domain$ = this.store.select(selectDomainById(this.id))
    }
  }

  update(domain: MutateDomainModel): void {
    this.store.dispatch(UpdateDomain({domain: domain}))
  }
}
