import { Component, OnInit } from '@angular/core';
import { MyStoreService } from '../my-store.service';
import { productModel } from "../../model/product"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart: productModel[] = [];
  totalPrice: number = 0;
  constructor(private myStoreService: MyStoreService) { };

  ngOnInit(): void {
    this.cart = this.myStoreService.getCart();
    this.totalPrice = this.myStoreService.getTotal();
  };

  updateTotalPrice() {
    this.totalPrice = this.myStoreService.getTotal();
  };

  removeProduct(id: number) {
    this.myStoreService.removeProduct(id);
  }
}
