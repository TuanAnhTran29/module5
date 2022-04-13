import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../productService/product.service";
import {Product} from "../../model/product";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {CartServiceService} from "../../cartService/cart-service.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'info', 'update'];
  dataSource: any;

  isAdmin= false


  @ViewChild(MatPaginator) paginator: any;



  status= ""
  products: Product[] = []

  constructor(private productService: ProductService, private router: Router, private cartService: CartServiceService) { }

  ngOnInit(): void {
      this.getAllProduct()
    if (JSON.parse(window.sessionStorage.getItem(`Token_key`)!).roles[0].authority == "ADMIN"){
      this.isAdmin= true
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllProduct(){
    this.productService.getAllProduct().subscribe(data => {
      this.products= data;
      this.dataSource= new MatTableDataSource<Product>(this.products)
    })
  }




}
