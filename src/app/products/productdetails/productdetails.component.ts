import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
  idNumber:any = 0;
  details:any={};
  constructor(private _route:ActivatedRoute, private _service:ProductsService){
    this.idNumber = this._route.snapshot.paramMap.get("id")
  }

  ngOnInit(){
    this.showIdProduct();
  }

  showIdProduct(){
    this._service.getIdProduct(this.idNumber).subscribe((response)=>{
      this.details = response;
    })
  }
}
