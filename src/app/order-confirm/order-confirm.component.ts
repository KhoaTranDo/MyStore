import { Component, OnInit } from '@angular/core';
import { MyStoreService } from '../my-store.service';
@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {
  fullName: string = '';
  totalPrice: number = 0;
  constructor(private myStoreService: MyStoreService) { }

  ngOnInit(): void {
    this.fullName = this.myStoreService.getFullName();
    this.totalPrice = this.myStoreService.getTotal();
  }
}
