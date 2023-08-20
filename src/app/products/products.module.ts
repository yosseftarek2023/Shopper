import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProdComponent } from './all-prod/all-prod.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './product/product.component';


@NgModule({
    declarations: [
        AllProdComponent,
        ProductdetailsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule
    ]
})
export class ProductsModule { }
