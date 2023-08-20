import { Component,OnInit } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartProducts:any[] = [];
  total:any = 0;
  send:boolean = false;

  constructor(private _service:CartsService){

  }
  ngOnInit(){
    this.getCart();
  }
  getCart(){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
    this.getTotal();
}
  getTotal(){
    this.total = 0;
    for(let prod in this.cartProducts){
      this.total += this.cartProducts[prod].item.price * this.cartProducts[prod].quantity;
    }
  }

  addProd(number:any){
    this.cartProducts[number].quantity += 1;
    this.getTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProducts));
  }
  subProd(number:any){
    this.cartProducts[number].quantity -= 1;
    this.getTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProducts));
  }

  deleteProd(index:number){
    this.cartProducts.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(this.cartProducts));
  }

  detectChange(){
    localStorage.setItem('cart',JSON.stringify(this.cartProducts));
  }

  clearCart(){
    this.cartProducts = [];
    localStorage.setItem('cart',JSON.stringify(this.cartProducts));
  }

  sendCart(){
    let productInCart = this.cartProducts.map(item => {
      return {productId:item.item.id,quantity:item.quantity}
    })
    let Model = {
      userId: 5,
      date: new Date(),
      products:productInCart,
    }
    this._service.CreateNewCart(Model).subscribe((response)=>{
      this.send = true;
    })
  }
}
