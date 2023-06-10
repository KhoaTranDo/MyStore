import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { productModel } from 'src/model/product';
import { MyStoreService } from '../my-store.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: productModel | undefined;
  @Output() addCart: EventEmitter<productModel> = new EventEmitter();
  quantity: number = 1;
  listQuantity: number[] = [];
  constructor(private myStoreService: MyStoreService) { }

  ngOnInit(): void {
    this.listQuantity = this.myStoreService.getListQuantity();
  }

  addToCart() {
    if (this.product) {
      this.product.quantity = this.quantity;
      this.addCart.emit(this.product);
      alert("add to cart!!");
    }
  }
}
