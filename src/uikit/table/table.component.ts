import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Input() containsCheckbox: boolean = false;
  @Input() elementForTable: Observable<any[]> = of([]) ;
  @Input() startDelete: boolean = false;

  //serve per mandare ai componentit che utilizzano la table tutti gli id delle checkbox selezionate per effettuare la delete
  @Output() delete: EventEmitter<Array<number>> = new EventEmitter<Array<number>>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  //dataSource serve per andare a popolare la tabella
  dataSource = new MatTableDataSource<any[]>();

  elementsForDelete: Array<number> = [];
  
  ngOnInit(): void {
    this.elementForTable.subscribe(p => this.dataSource = new MatTableDataSource<any[]>(p));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator as MatPaginator;
  }

  //questa funzione serve per splittare una stringa in caso di camel case per i TH della table. ES: userAgent diventa User Agent
  convertCamelCaseToSpaces(text: string): string {
    return text.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  //questa funzione serve per inserire in un array tutte le checkbox che sono checkate
  checkboxValue(id: number): void {
    if(this.startDelete) {
      this.elementsForDelete = []
    }
    if(!this.elementsForDelete.includes(id)) {
      this.elementsForDelete = [...this.elementsForDelete, id];
      this.elementsForDelete = [...new Set(this.elementsForDelete)];
    } else {
      this.elementsForDelete = this.elementsForDelete.filter(item => item !== id)
    }
    this.delete.emit(this.elementsForDelete);
  }
}
