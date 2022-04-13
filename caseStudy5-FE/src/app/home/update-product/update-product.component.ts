import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../productService/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../authentication/categoryService/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  formUpdate: any
  status= ''
  id: any

  categories: Category[]= []

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.id= Number(param.get('id'))
      this.getProductById(this.id)
      this.getAllCategory()
    })
  }

  getProductById(id: any){
    return this.productService.getProductById(id).subscribe(product => {
      this.formUpdate = new FormGroup({
        name: new FormControl(product.name, Validators.required),
        price: new FormControl(product.price, Validators.required),
        description: new FormControl(product.description, Validators.required),
        picture: new FormControl(product.picture, Validators.required),
        status: new FormControl(product.status, Validators.required),
        inventory: new FormControl(product.inventory, Validators.required),
        categories: new FormControl(product.categories, Validators.required)
      });
    });
  }

  submitUpdate(id: any){
    const product: Product= {
      id: id,
      name: this.formUpdate.value.name,
      price: this.formUpdate.value.price,
      description: this.formUpdate.value.description,
      picture: this.formUpdate.value.picture,
      status: this.formUpdate.value.status,
      inventory: this.formUpdate.value.inventory,
      categories: [{
        id: this.formUpdate.categories
      }]
    }
    this.productService.updateProduct(id,product).subscribe(() =>{
      this.status= 'Updated successfully'
    })
  }

  getAllCategory(){
    return this.categoryService.getAllCategory().subscribe(data =>{
      this.categories= data
    })
  }


  checkBoxValue($event: any) {
    this.formUpdate.categories= $event.target.value
  }
}
