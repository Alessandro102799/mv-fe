import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomainForm } from './domain-form.interface';
import { MutateDomainModel } from '../../../../../shared/model/domain/mutate.domain.model';
import { ReadDomainModel } from '../../../../../shared/model/domain/read.domain.model';

@Component({
  selector: 'app-form-domain',
  templateUrl: './form-domain.component.html',
  styleUrl: './form-domain.component.scss',
})
export class FormDomainComponent implements OnInit{

  constructor(private readonly fb: FormBuilder) {}

  @Input() domain: ReadDomainModel | null = null;

  @Output() mutateForm: EventEmitter<MutateDomainModel> = new EventEmitter<MutateDomainModel>();

  fg: FormGroup<DomainForm> = this.fb.nonNullable.group<DomainForm>({
    domain: this.fb.nonNullable.control('', Validators.required),
    organizationId: this.fb.nonNullable.control(1),
    branch: this.fb.nonNullable.control(false)
  });

  ngOnInit(): void {
    if(this.domain) {
      //controllo che serve per gestire il caso dell'update
      this.fg.addControl('id', this.fb.nonNullable.control(this.domain.id))
    }
    this.updateForm();
  }

  updateForm(): void {
    if(this.domain) {
      this.fg.patchValue({
        id: this.domain.id,
        domain: this.domain.domain,
        branch: this.domain.branch,
        organizationId: this.domain.organizationId
      })
    }
  }

  sendForm(): void {
    this.mutateForm.emit(this.fg.value as MutateDomainModel)
  }
}
