import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  username: string;
  domain: string;
  contact: string;
  expires: string;
  userAgent: string
}

//dati mockati
const ELEMENT_DATA: PeriodicElement[] = [
  {username: 'Alessandro', domain: 'Via Aloi', contact: '3802091212', expires: '14/12/2021', userAgent: 'Pippo'},
  {username: 'Carlo', domain: 'Belmonte Chiavelli', contact: '3802091212', expires: '07/11/2021', userAgent: 'Pluto'},
  {username: 'Alessandro', domain: 'Via Aloi', contact: '3802091212', expires: '14/12/2021', userAgent: 'Pippo'},
  {username: 'Carlo', domain: 'Belmonte Chiavelli', contact: '3802091212', expires: '07/11/2021', userAgent: 'Pluto'},
  {username: 'Alessandro', domain: 'Via Aloi', contact: '3802091212', expires: '14/12/2021', userAgent: 'Pippo'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterViewInit{
  //serve per mostrare i nomi delle colonne all'interno delle colonne
  displayedColumns: string[] = ['status', 'username', 'domain', 'contact', 'expires', 'userAgent'];
  //dataSource serve per andare a popolare la tabella
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator as MatPaginator;
  }
}
