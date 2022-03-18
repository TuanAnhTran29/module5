import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: any
  id: any

  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      const product = this.productService.findById(this.id);

      if (product === undefined) {
        console.log("Can't find this product!!")
      } else {

        this.productForm = new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description)
        });
      }
    })

  }


  submitUpdate(){
    const product= this.productForm.value
    this.productService.updateById(this.id,product)
    this.productForm.reset()
  }
}
