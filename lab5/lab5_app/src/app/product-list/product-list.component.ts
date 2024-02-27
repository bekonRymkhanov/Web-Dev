import { Component } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
import { products, Product } from "../products";
import { NgForOf, NgIf } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [
    ProductItemComponent,
    NgForOf,
    RouterLink,
    NgIf
  ],
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  sticker_green = "https://resources.cdn-kaspi.kz/yml/static/assets/badges/b5.svg";
  sticker_red = "https://resources.cdn-kaspi.kz/yml/static/assets/badges/l12.svg";
  showDescription = false;
  filteredProducts: Product[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = routeParams.get('category');

    this.filteredProducts = products.filter(
      (product) => product.category === categoryIdFromRoute
    );
  }
}
