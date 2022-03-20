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
      this.id = Number(paramMap.get('id'));
      this.getCategory(this.id)
    })

  }

  getCategory(id: any) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  submitUpdate(id: any){
    const product= this.productForm.value
    this.productService.updateById(id,product).subscribe(() => {
      this.productForm.reset()
      alert("Cập nhật thành công")
    }, error => {
      console.log(error)
    })

  }
}
