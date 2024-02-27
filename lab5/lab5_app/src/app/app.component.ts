import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ProductItemComponent} from "./product-item/product-item.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {categories, products} from "./products";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, NgForOf, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly categories = categories;
  title:string="lab5_app";
}
