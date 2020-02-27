import { Component, OnInit } from '@angular/core';
import { CheckoutService } from "src/app/checkout/checkout.service";
import { CartService } from '../cart/cart.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: FormGroup;

  cartList;
  constructor(public checkoutService: CheckoutService, public cartService: CartService, private _formBuilder: FormBuilder) { }

  createInfoForm() {
    this.checkoutForm = this._formBuilder.group({
      clientName: [''],
      clientEmail: [''],
      clientMobile: [''],
      shippingCharge: ['']
    });
  }

  ngOnInit() {
    this.cartList = this.cartService.getCartItems();
    this.createInfoForm();
  }

}
