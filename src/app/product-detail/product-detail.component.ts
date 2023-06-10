import { Component, OnInit } from '@angular/core';
import { MyStoreService } from '../my-store.service';
import { productModel } from "../../model/product"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  listQuantity: number[] = []
  quantity: number = 1
  constructor(private myStoreService: MyStoreService, private route: ActivatedRoute) { }
  product: productModel = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    quantity: 0
  };

  ngOnInit(): void {
    this.listQuantity = this.myStoreService.getListQuantity();

    this.myStoreService.getListProduct().subscribe(result => {
      let index = result.findIndex(x => x['id'] == this.route.snapshot.paramMap.get('id'));
      this.product = result[index];
    })
  }

  addToCart() {
    this.product.quantity = this.quantity;
    this.myStoreService.addCart(this.product);
    alert("add to cart!!");
  }
}
