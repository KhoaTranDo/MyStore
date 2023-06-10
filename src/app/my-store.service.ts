import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { productModel } from 'src/model/product';
@Injectable({
  providedIn: 'root'
})
export class MyStoreService {

  cartData: productModel[] = [];
  listQuantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  fullName: string = '';

  constructor(private http: HttpClient) { }

  getFullName() {
    return this.fullName;
  }

  setFullName(fullName: string) {
    this.fullName = fullName;
  }

  getListProduct(): Observable<[]> {
    return this.http.get<[]>('/assets/data.json');
  }

  getListQuantity() {
    return this.listQuantity;
  }

  getCart() {
    return this.cartData;
  }

  removeProduct(id: number) {
    let dataIndex = this.cartData.findIndex((x) => (x.id === id));
    if (dataIndex >= 0) {
      this.cartData.splice(dataIndex, 1);
    }
    return this.cartData;
  }

  getTotal(): number {
    let countTotal = 0;
    this.cartData.map((x) => {
      countTotal += x.quantity * x.price;
    })
    return Number(countTotal.toFixed(2));
  }

  addCart(data: productModel) {
    let checkValid = this.cartData.findIndex((x) => (x.id === data.id));
    if (checkValid == -1) {
      this.cartData.push(data);
    } else {
      data.quantity += this.cartData[checkValid].quantity;
      this.cartData[checkValid] = { ...data };
    }
  }
}
