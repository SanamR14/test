import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [MatIconModule, MatTableModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent implements OnInit, AfterViewInit{
  dataSource!: MatTableDataSource<PeriodicElement>;
 
  constructor(private router: Router, private http: HttpClient){}
  ngOnInit() {
    this.fetchData();
  }
  displayedColumns: string[] = ['category', 'type', 'size', 'cost'];




  fetchData() : any {
    this.http.get('http://localhost:8080/kids').subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(data);

    })
  }
  
  ngAfterViewInit() {
   

  }
  
  signIn(){
    this.router.navigate(['/signIn']);
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
// const ELEMENT_DATA: PeriodicElement[] = 
// [
//   {dressId: "ZFL 14082", category: "Shirt", type: "reversable", size: "8", cost: 14.99, count: 25},
//   {dressId: "ZFL 14083", category: "Shirt", type: "reversable", size: "9", cost: 14.99, count: 25},
//   {dressId: "ZFL 14084", category: "Shirt", type: "reversable", size: "10", cost: 15.49, count: 25},
//   {dressId: "ZFL 14085", category: "Shirt", type: "reversable", size: "12", cost: 15.49, count: 30},
//   {dressId: "ZFL 14086", category: "Shirt", type: "reversable", size: "14", cost: 16.49, count: 30},
//   {dressId: "ZFL 14087", category: "Shirt", type: "plain", size: "8", cost: 12.99, count: 20},
//   {dressId: "ZFL 14088", category: "Shirt", type: "plain", size: "9", cost: 12.99, count: 20},
//   {dressId: "ZFL 14089", category: "Shirt", type: "plain", size: "10", cost: 12.99, count: 20},
//   {dressId: "ZFL 14090", category: "Shirt", type: "plain", size: "12", cost: 12.99, count: 30},
//   {dressId: "ZFL 14091", category: "Shirt", type: "plain", size: "14", cost: 12.99, count: 30},
//   {dressId: "ZFL 14092", category: "Jean", type: "denim", size: "XS", cost: 24.99, count: 30},
//   {dressId: "ZFL 14093", category: "Jean", type: "denim", size: "S", cost: 24.99, count: 30},
//   {dressId: "ZFL 14094", category: "Jean", type: "denim", size: "M", cost: 25.99, count: 30},
//   {dressId: "ZFL 14095", category: "Jean", type: "denim", size: "L", cost: 25.99, count: 20},
//   {dressId: "ZFL 14096", category: "Jean", type: "denim", size: "XL", cost: 27.99, count: 10},
//   {dressId: "ZFL 14097", category: "Shorts", type: "cotton", size: "XS", cost: 17.99, count: 30},
//   {dressId: "ZFL 14098", category: "Shorts", type: "cotton", size: "S", cost: 17.99, count: 30},
//   {dressId: "ZFL 14099", category: "Shorts", type: "cotton", size: "M", cost: 17.99, count: 30},
//   {dressId: "ZFL 15000", category: "Shorts", type: "cotton", size: "L", cost: 18.99, count: 20},
//   {dressId: "ZFL 15001", category: "Shorts", type: "cotton", size: "XL", cost: 19.99, count: 10},

// ];
