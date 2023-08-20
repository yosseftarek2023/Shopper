import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-all-prod',
  templateUrl: './all-prod.component.html',
  styleUrls: ['./all-prod.component.scss']
})
export class AllProdComponent {
  products:Product[] =[];
  categories:string[]= [];
  msg:string ="";
  loading:boolean = false
  cartProducts:any[] = [];
  constructor( private _productsService:ProductsService){
  }

  ngOnInit():void{
    this.showProducts();
    this.showCategories();
  }
  showProducts(){ 
     this._productsService.getProducts().subscribe((response:any)=>{
              this.products = response;
    },
    error => {
      this.msg = error.message;
    })
  }

  showCategories(){ 
    this._productsService.getCategories().subscribe((response:any)=>{
             this.categories = response;
             console.log(this.categories);
   },
   error => {
     this.msg = error.message;
   })
 }
 filterCategories(event:any){
  let value = event.target.value;
  this.showCategory(value);
  if (value == 'all'){
    this.showProducts();
  }
 }
 showCategory(key:string){
  this._productsService.getByCategory(key).subscribe((response:any)=>{
    this.products = response;
  })}

  addToCart(event:any){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      let exists = this.cartProducts.find(item => item.item.id == event.item.id )
      if (exists){
        alert("product put before !")
      } else{
        this.cartProducts.push(event);
        localStorage.setItem('cart',JSON.stringify(this.cartProducts));
      }
    }else{
      this.cartProducts.push(event);
      localStorage.setItem('cart',JSON.stringify(this.cartProducts));
    }
    }

}
