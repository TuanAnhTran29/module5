import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SigninComponent } from './authentication/signin/signin.component';
import { ProductsComponent } from './home/products/products.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import { UploadPictureComponent } from './upload/upload-picture/upload-picture.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateProductComponent } from './home/create-product/create-product.component';
import { ViewProductComponent } from './home/view-product/view-product/view-product.component';
import { MyProfileComponent } from './profile/my-profile/my-profile.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { CartComponent } from './cart/cart.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { BillComponent } from './bill/bill/bill.component';
import { UpdateProductComponent } from './home/update-product/update-product.component';
import { DeleteProductComponent } from './home/delete-product/delete-product.component';
import { UserComponent } from './admin_home/user/user.component';
import { DeleteUserComponent } from './admin_home/delete-user/delete-user.component';
import { CustomerBillComponent } from './admin_home/customer-bill/customer-bill.component';
import { UserBillComponent } from './bill/user-bill/user-bill.component';
import { HistoryCartComponent } from './bill/history-cart/history-cart.component';
import { AllBillComponent } from './bill/all-bill/all-bill.component';
import {MatMenuModule} from "@angular/material/menu";
import {PortalModule} from "@angular/cdk/portal";
import {MatSidenavModule} from "@angular/material/sidenav";
import { SearchProductComponent } from './search/search-product/search-product.component';
import { TurnoverComponent } from './turnover/turnover/turnover.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    SigninComponent,
    ProductsComponent,
    UploadPictureComponent,
    CreateProductComponent,
    ViewProductComponent,
    MyProfileComponent,
    UpdateProfileComponent,
    CartComponent,
    BillComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    UserComponent,
    DeleteUserComponent,
    CustomerBillComponent,
    UserBillComponent,
    HistoryCartComponent,
    AllBillComponent,
    SearchProductComponent,
    TurnoverComponent
  ],
  imports: [
    MatProgressBarModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatMenuModule,
    PortalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatSidenavModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
