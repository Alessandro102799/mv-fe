import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuModel } from '../../../../shared/model/menu/menu.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('100ms',
          style({opacity: 0})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('100ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}),
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SubmenuComponent {

  @Input() data: MenuModel = {
    routerLink: '',
    icon: '',
    label: '',
    submenu: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple = false;
  screenWidth = 0;

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  handleClick(item: any): void {
    if(!this.multiple) {
      if(this.data.submenu && this.data.submenu.length > 0) {
        for(let modelItem of this.data.submenu) {
          if(item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
