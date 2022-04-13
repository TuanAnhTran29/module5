import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../productService/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  id: any
  currentProduct: any

  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.id= Number(param.get('id'))
      this.productService.getProductById(this.id).subscribe(data =>{
        this.currentProduct= data
      })
    })
  }

  deleteProduct(){
    this.productService.deleteProduct(this.id).subscribe()
    alert("Deleted successfully!")
    this.router.navigate([''])

  }

  backToList(){
    this.router.navigate([''])
  }

}
