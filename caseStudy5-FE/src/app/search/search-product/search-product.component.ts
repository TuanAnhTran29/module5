import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../productService/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../model/product";

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'description', 'price','info','update'];
  dataSource: any
  keyword: any
  products: any
  isAdmin: any;

  status= {
    message: 'No search results!'
  }

  message= ''

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.keyword= param.get('keyword')
      this.productService.searchProduct(this.keyword).subscribe(data=>{
        if (JSON.stringify(data) == JSON.stringify(this.status)){
          this.message= 'No search results!'
          this.dataSource= new MatTableDataSource()
        }else {
          this.message= this.keyword
          this.products= data
          this.dataSource= new MatTableDataSource<Product[]>(this.products)
        }
      })
    })
    if (JSON.parse(window.sessionStorage.getItem(`Token_key`)!).roles[0].authority == "ADMIN"){
      this.isAdmin= true
    }
  }

}
