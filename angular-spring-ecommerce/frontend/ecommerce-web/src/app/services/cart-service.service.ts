import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItens: CartItem[] = []

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }


  addToCart(theCartItens: CartItem) {

    //Check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItens: CartItem = undefined!;

    if (this.cartItens.length > 0) {
      //find the item in the cart based on item id
      for (let tempCartItem of this.cartItens) {
        if (tempCartItem.id === theCartItens.id) {
          existingCartItens = tempCartItem;
          break;
        }
      }
    }

    //check if we found it
    alreadyExistsInCart = (existingCartItens != undefined);

    if (alreadyExistsInCart) {
      //increment the quantity
      existingCartItens.quantity++;
    } else {
      this.cartItens.push(theCartItens);
    }

    //compute cart quantity and cart total
    // this.computeCartTotals();
  }

}
