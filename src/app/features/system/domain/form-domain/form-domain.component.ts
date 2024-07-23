import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomainForm } from './domain-form.interface';
import { MutateDomainModel } from '../../../../../shared/model/domain/mutate.domain.model';

@Component({
  selector: 'app-form-domain',
  templateUrl: './form-domain.component.html',
  styleUrl: './form-domain.component.scss',
})
export class FormDomainComponent {

  constructor(private readonly fb: FormBuilder) {}

  @Output() mutateForm: EventEmitter<MutateDomainModel> = new EventEmitter<MutateDomainModel>();

  fg: FormGroup<DomainForm> = this.fb.nonNullable.group<DomainForm>({
    domain: this.fb.nonNullable.control('', Validators.required),
    organizationId: this.fb.nonNullable.control(1),
    branch: this.fb.nonNullable.control(false)
  });

  sendForm(): void {
    this.mutateForm.emit(this.fg.value as MutateDomainModel)
  }
}
