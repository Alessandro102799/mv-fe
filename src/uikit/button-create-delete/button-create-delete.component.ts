import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateDeleteModel } from '../../shared/model/button-create-delete/create-delete.model';

@Component({
  selector: 'app-button-create-delete',
  templateUrl: './button-create-delete.component.html',
  styleUrl: './button-create-delete.component.scss'
})

export class ButtonCreateDeleteComponent{

  //serve per emittare al componente padre il valore create o delete
  @Output() createOrDelete: EventEmitter<CreateDeleteModel> = new EventEmitter<CreateDeleteModel>();


  create(): void {
    this.createOrDelete.emit({create: true, delete: false });
  }

  delete(): void {
    this.createOrDelete.emit({create: false, delete: true });
  }
}
