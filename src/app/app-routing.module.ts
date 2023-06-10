import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent},
  { path: 'confirm', component: OrderConfirmComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: '', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
