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
import { ButtonCreateSaveComponent } from './button-create-save/button-create-save.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SnackbarService } from "../shared/services/snackbar/snackbar.service";
import { SnackbarComponent } from './snackbar/snackbar.component';
@NgModule({
  declarations: [
    TitlePageComponent,
    CardsComponent,
    TableComponent,
    ButtonCreateDeleteComponent,
    ButtonCreateSaveComponent,
    SnackbarComponent
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    MatInputModule,
    MatCheckboxModule,
    TitlePageComponent,
    CardsComponent,
    TableComponent,
    MatTableModule,
    ButtonCreateDeleteComponent,
    ButtonCreateSaveComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SnackbarService]
})
export class UikitModule {}
