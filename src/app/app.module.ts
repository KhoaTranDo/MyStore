import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutFormComponent,
    OrderConfirmComponent,
    ProductItemComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
