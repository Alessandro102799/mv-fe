import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { TitlePageComponent } from './title-page/title-page.component';
import { CardsComponent } from './cards/cards.component';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { TableComponent } from './table/table.component';
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from '@angular/material/checkbox';
import {  MatPaginatorModule } from "@angular/material/paginator";
import { ButtonCreateDeleteComponent } from './button-create-delete/button-create-delete.component';
@NgModule({
  declarations: [
    TitlePageComponent,
    CardsComponent,
    TableComponent,
    ButtonCreateDeleteComponent
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  exports: [
    MatInputModule,
    MatCheckboxModule,
    TitlePageComponent,
    CardsComponent,
    TableComponent,
    MatTableModule,
    ButtonCreateDeleteComponent
  ],
  providers: []
})
export class UikitModule {}
