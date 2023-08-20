import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  addButton:boolean = false;
  amount:number = 0;
  showButton(){
    this.addButton = true;
  }
  @Input() element!:Product;
  @Output() item = new EventEmitter();
   add(){
    this.item.emit({item : this.element, quantity: this.amount})
  }
}
