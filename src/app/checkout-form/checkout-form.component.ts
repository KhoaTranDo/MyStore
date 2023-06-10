import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyStoreService } from '../my-store.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  constructor(private router: Router, private myStoreService: MyStoreService) { }
  fullName: string = '';
  address: string = '';
  credit: string = '';
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.myStoreService.getCart().length == 0) {
      alert("Cart is empty !!!");
    } else {
      alert("Success");
      this.myStoreService.setFullName(this.fullName);
      this.router.navigate(['confirm']);
    }
  }
}
