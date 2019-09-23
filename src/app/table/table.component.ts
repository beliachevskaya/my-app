import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface IAvengers {
  position: number;
  name: string;
  heroName: string;
  character: string;
}

const AVENGERS: IAvengers[] = [
  {position: 1, name: 'Tony Stark', heroName: 'Iron Man', character: 'light'},
  {position: 2, name: 'Steve Rogers',  heroName: 'Captain America', character: 'light'},
  {position: 3, name: 'Thor', heroName: 'Thor', character: 'light'},
  {position: 4, name: 'Bruce Banner', heroName: 'Hulk', character: 'light'},
  {position: 5, name: 'Natasha Romanoff', heroName: 'Black Widow', character: 'light'},
  {position: 6, name: 'Thanos', heroName: 'Thanos', character: 'dark'},
  {position: 7, name: 'Peter Quill', heroName: 'Star-Lord', character: 'light'},
  {position: 8, name: 'Loki', heroName: 'Loki', character: 'dark'},
  {position: 9, name: 'Clint Barton', heroName: 'Hawkeye', character: 'light'},
  {position: 10, name: 'Peter Parker', heroName: 'Spider-Man', character: 'light'},
  {position: 11, name: 'Steven Strange', heroName: 'Doctor Strange', character: 'light'},
  {position: 12, name: 'Groot', heroName: 'Groot', character: 'light'},
  {position: 13, name: 'Ronan', heroName: 'Ronan', character: 'dark'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'heroName', 'character'];
  dataSource = new MatTableDataSource(AVENGERS);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: IAvengers, filter: string) => {
      return data.name.trim().toLowerCase().includes(filter) ||
      data.heroName.trim().toLowerCase().includes(filter) ||
      data.character.trim().toLowerCase().includes(filter) ||
      data.position.toString() === filter;
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
