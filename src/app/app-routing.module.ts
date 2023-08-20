import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProdComponent } from './products/all-prod/all-prod.component';
import { CartComponent } from './carts/cart/cart.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';

const routes: Routes = [
  {path:'products', component:AllProdComponent},
  {path:'cart',component:CartComponent},
  {path:'details/:id',component:ProductdetailsComponent},
  {path:'**',redirectTo:"products",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
