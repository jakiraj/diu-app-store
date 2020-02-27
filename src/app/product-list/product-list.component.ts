import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from "src/app/product-list/product.service";
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products = [];
  constructor(private productService: ProductService, public cartService: CartService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((res: any[]) => {
      this.products = res;
    })
  }
}
