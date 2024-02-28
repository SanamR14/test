import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [MatIconModule, MatTableModule, MatPaginatorModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent implements AfterViewInit{
  
   constructor(private router: Router){}

   signIn(){
     this.router.navigate(['/signIn']);
   }

  displayedColumns: string[] = ['category', 'type', 'size', 'cost'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  dressId: string;
  category: string;
  type: string;
  size: string;
  cost: number;
  count: number;
}
const ELEMENT_DATA: PeriodicElement[] = 
[
  {dressId: "ZFL 14085", category: "Shirt", type: "reversable", size: "12", cost: 15.49, count: 30},
  {dressId: "ZFL 14086", category: "Shirt", type: "reversable", size: "14", cost: 16.49, count: 30},
  {dressId: "ZFL 14090", category: "Shirt", type: "plain", size: "12", cost: 12.99, count: 30},
  {dressId: "ZFL 14091", category: "Shirt", type: "plain", size: "14", cost: 12.99, count: 30},
  {dressId: "ZFL 14093", category: "Jean", type: "denim", size: "S", cost: 24.99, count: 30},
  {dressId: "ZFL 14094", category: "Jean", type: "denim", size: "M", cost: 25.99, count: 30},
  {dressId: "ZFL 14095", category: "Jean", type: "denim", size: "L", cost: 25.99, count: 20},
  {dressId: "ZFL 14098", category: "Shorts", type: "cotton", size: "S", cost: 17.99, count: 30},
  {dressId: "ZFL 14099", category: "Shorts", type: "cotton", size: "M", cost: 17.99, count: 30},
  {dressId: "ZFL 15000", category: "Shorts", type: "cotton", size: "L", cost: 18.99, count: 20},
  

];
