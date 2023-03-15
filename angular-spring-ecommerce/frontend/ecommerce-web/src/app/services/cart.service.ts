import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(theCartItens: CartItem) {

    //Check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItens: CartItem = undefined!;

    if (this.cartItems.length > 0) {
      //find the item in the cart based on item id
      existingCartItens = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItens.id)!;
    }

    //check if we found it
    alreadyExistsInCart = (existingCartItens != undefined);

    if (alreadyExistsInCart) {
      //increment the quantity
      existingCartItens.quantity++;
    } else {
      this.cartItems.push(theCartItens);
    }

    //compute cart quantity and cart total
    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalValueItens: number = 0;
    let totalQuantityItens: number = 0;

    for (let tempCartItem of this.cartItems) {
      totalValueItens += tempCartItem.unitPrice * tempCartItem.quantity;
      totalQuantityItens += tempCartItem.quantity;
    }

    //publish the new values... all subscribes will receive the new data
    this.totalPrice.next(totalValueItens);
    this.totalQuantity.next(totalQuantityItens);
  }

  decrementQuantity(theCartItem: CartItem){
      theCartItem.quantity--;

      if(theCartItem.quantity === 0){
        this.remove(theCartItem);
      }else{
        this.computeCartTotals();
      }
  }

  remove(theCartItem: CartItem){
    // get index of item in the array
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id);

    // if found, remove the item from the array at the given index
    if(itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }

}
