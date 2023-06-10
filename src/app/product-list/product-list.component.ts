import { Component, OnInit, Output } from '@angular/core';
import { MyStoreService } from '../my-store.service';
import { productModel } from "../../model/product"
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() productList: productModel[] = [];
  cart: productModel[] = [];

  constructor(private myStoreService: MyStoreService) { }

  ngOnInit(): void {
    this.myStoreService.getListProduct().subscribe(result => {
      this.productList = result;
    });
  }

  addCart(data: productModel): void {
    this.myStoreService.addCart(data);
  }
}
