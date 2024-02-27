import { Routes } from '@angular/router';
import path from "node:path";
import {ProductItemComponent} from "./product-item/product-item.component";
import {AppComponent} from "./app.component";
import {ProductListComponent} from "./product-list/product-list.component";

export const routes =[
  {path: 'categories/:category', component: ProductListComponent},
  {path :'', component:ProductItemComponent},
];
