import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList;
  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartList = this.cartService.getCartItems();
  }
}
