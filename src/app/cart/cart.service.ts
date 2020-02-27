import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(itemobj){
    let _item = {id: itemobj.id, productName: itemobj.productName, salesPrice: itemobj.salesPrice, qty: 1};
    let cart = this.getCartItems();
    if (cart && cart.length > 0) {
      cart.forEach(elem=>{
        if (elem.id == _item.id) {
          elem.qty += 1; 
        }else if (elem.id != _item.id) {
          cart.push(_item);
        }
      }) 
    } else {
      cart = [_item];
    }
    const itemStringify = JSON.stringify(cart);
    localStorage.setItem('cartItem', itemStringify)
  }

  getCartItems():any[]{
    let items = localStorage.getItem('cartItem');
    return JSON.parse(items) || [];
  }
}
