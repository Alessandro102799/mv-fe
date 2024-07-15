import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { InputTextComponent } from './input-text/input-text.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { CardsComponent } from './cards/cards.component';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { TableComponent } from './table/table.component';
import { MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
@NgModule({
  declarations: [
    InputTextComponent,
    TitlePageComponent,
    CardsComponent,
    TableComponent
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatInputModule,
    InputTextComponent,
    TitlePageComponent,
    CardsComponent,
    TableComponent,
    MatTableModule
  ],
  providers: []
})
export class UikitModule {}
