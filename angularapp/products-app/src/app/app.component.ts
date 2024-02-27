import {Component, Input, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {NgForOf, NgIf} from "@angular/common";
import {ProductsService} from "./products.service";
import {HttpClientModule, HttpHandler} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "./filter-products.pipe";
import {CategoriesComponent} from "./categories/categories.component";
import {categories} from "./Data/products";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, NgForOf, HttpClientModule, FormsModule, FilterProductsPipe, CategoriesComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ProductsService]
})
export class AppComponent implements OnInit{
  title="products-app";
  targetCategory='';
  ngOnInit(): void {
  }
  changeCategory(category:string){
    if(category=="all"){
      this.targetCategory='';
      return;
    }

    this.targetCategory=category;
  }


  protected readonly categories = categories;
}
