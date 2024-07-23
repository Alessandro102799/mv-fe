import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterViewInit, OnInit{

  //serve per mostrare i nomi delle colonne all'interno delle colonne
  @Input() displayedColumns: string[] = [];

  @Input() elementForTable: Observable<any[]> = of([]) ;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  //dataSource serve per andare a popolare la tabella
  dataSource = new MatTableDataSource<any[]>();
  
  ngOnInit(): void {
    this.elementForTable.subscribe(p => this.dataSource = new MatTableDataSource<any[]>(p))
    //this.dataSource = new MatTableDataSource<any[]>(this.elementForTable);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator as MatPaginator;
  }

  //questa funzione serve per splittare una stringa in caso di camel case per i TH della table. ES: userAgent diventa User Agent
  convertCamelCaseToSpaces(text: string): string {
    return text.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
}
