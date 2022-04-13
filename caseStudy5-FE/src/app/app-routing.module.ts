import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./authentication/register/register.component";
import {SigninComponent} from "./authentication/signin/signin.component";
import {ProductsComponent} from "./home/products/products.component";
import {CreateProductComponent} from "./home/create-product/create-product.component";
import {ViewProductComponent} from "./home/view-product/view-product/view-product.component";
import {MyProfileComponent} from "./profile/my-profile/my-profile.component";
import {UpdateProfileComponent} from "./profile/update-profile/update-profile.component";
import {CartComponent} from "./cart/cart.component";
import {UpdateProductComponent} from "./home/update-product/update-product.component";
import {DeleteProductComponent} from "./home/delete-product/delete-product.component";
import {UserComponent} from "./admin_home/user/user.component";
import {DeleteUserComponent} from "./admin_home/delete-user/delete-user.component";
import {CustomerBillComponent} from "./admin_home/customer-bill/customer-bill.component";
import {BillComponent} from "./bill/bill/bill.component";
import {UserBillComponent} from "./bill/user-bill/user-bill.component";
import {HistoryCartComponent} from "./bill/history-cart/history-cart.component";
import {AllBillComponent} from "./bill/all-bill/all-bill.component";
import {SearchProductComponent} from "./search/search-product/search-product.component";
import {TurnoverComponent} from "./turnover/turnover/turnover.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'create-product',
    component:CreateProductComponent
  },
  {
    path: 'view-product/:id',
    component:ViewProductComponent
  },
  {
    path: 'my-profile/:id',
    component: MyProfileComponent
  },
  {
    path: 'update-profile/:id',
    component: UpdateProfileComponent
  },
  {
    path: 'cart/:id',
    component: CartComponent
  },
  {
    path: 'product-edit/:id',
    component: UpdateProductComponent
  },
  {
    path: 'product-delete/:id',
    component: DeleteProductComponent
  },
  {
    path: 'allUser',
    component: UserComponent
  },
  {
    path: 'delete-user/:id',
    component: DeleteUserComponent
  },
  {
    path: 'bill-user/:userId',
    component: UserBillComponent
  },
  {
    path: 'bill/:total/:userId',
    component: BillComponent
  },
  {
    path: 'bill',
    component: CustomerBillComponent
  },
  {
    path: 'history-cart/:id/:total',
    component: HistoryCartComponent
  },
  {
    path: 'allBill',
    component: AllBillComponent
  },
  {
    path: 'search/:keyword',
    component: SearchProductComponent
  },
  {
    path: 'allRevenue',
    component: TurnoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
