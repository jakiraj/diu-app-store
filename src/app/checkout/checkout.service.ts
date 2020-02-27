import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getCartItems(): any[] {
    let items = localStorage.getItem('cartItem');
    return JSON.parse(items) || [];
  }

  save(formData: FormGroup) {
    let formValue = formData.value;
    let cart = this.getCartItems();
    let newItem = [];
    cart.forEach(elem => {
      const newObject = { productId: elem.id, amount: elem.salesPrice, quantity: elem.qty };
      newItem.push(newObject);
    });
    formValue['orderDetailList'] = newItem;
    return this._httpClient.post('http://203.190.11.227:8040/rest/v1/order-customer', formValue);
  }
}
