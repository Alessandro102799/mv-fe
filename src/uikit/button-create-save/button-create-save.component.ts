import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-create-save',
  templateUrl: './button-create-save.component.html',
  styleUrl: './button-create-save.component.scss'
})
export class ButtonCreateSaveComponent {

  @Input() text: string = ''
  @Input() icon: string = ''
}
