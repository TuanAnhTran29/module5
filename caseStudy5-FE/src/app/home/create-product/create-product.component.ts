import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../productService/product.service";
import {Category} from "../../model/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../model/product";
import {CategoryService} from "../../authentication/categoryService/category.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  idCategory: any[]= []

  categories: Category[]= []
  formCreate: any

  createForm: any

  error= {
    message: 'Inventory must be more than 1'
  }

  status= 'Add new product'

  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.formCreate= new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      inventory: new FormControl('',Validators.required),
      categories:new FormControl('',Validators.required),
      picture: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    this.getAllCategory()
  }

  getAllCategory(){
    // setTimeout(() =>{this.categoryService.getAllCategory().subscribe(categories => {
    //   this.categories= categories;
    // });},500)

    this.categoryService.getAllCategory().subscribe(categories => {
        this.categories= categories;
      })
  }


  getPicture($event: string) {
    this.formCreate.picture= $event
  }

  createProduct() {
    this.createForm= new Product(
      this.formCreate.name,
      this.formCreate.price,
      this.formCreate.picture,
      this.formCreate.description,
      this.formCreate.inventory,
      this.formCreate.categories
    )
    this.productService.saveProduct(this.createForm).subscribe(data => {
      if (JSON.stringify(data) != JSON.stringify(this.error)){
        this.formCreate.reset()
        this.status= 'Added product successfully'
      }else {
        this.status= 'Inventory must be more than 1'
      }

    }, e =>{
      console.log(e)
    })
  }

  checkBoxValue($event: any) {
    this.formCreate.categories= $event.target.value
    console.log($event.target.value)
  }
}
