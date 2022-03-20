import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id:any

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number( paramMap.get('id'));
    })
  }

  deleteProduct(){
    this.productService.deleteProductById(this.id).subscribe(() => {
      this.router.navigate(['/product/list']);
    }, error => {
      console.log(error)
    })

  }

  backToList(){
    this.router.navigate(['/product/list']);
  }
}
