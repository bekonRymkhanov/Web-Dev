import {Component, Input, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "../product/product.component";
import {IProduct} from "../Models/product";
import {products as data} from "../Data/products";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ProductsService} from "../products.service";
import {HttpClientModule, HttpHandler} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "../filter-products.pipe";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, NgForOf, HttpClientModule, FormsModule, FilterProductsPipe, NgIf, NgClass],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  providers:[ProductsService]
})
export class CategoriesComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'products-app';
  products:IProduct[]=data;
  term:string='';
  @Input() targetCategory: string;


  onRemoveProduct(product:IProduct) {
    this.products=this.products.filter(p=>p!==product);
  }
}
