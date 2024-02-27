import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from "../Models/product";
import {CurrencyPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,

  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product:IProduct;
  @Output() removeProduct = new EventEmitter();
  sticker_green="https://resources.cdn-kaspi.kz/yml/static/assets/badges/b5.svg";
  sticker_red="https://resources.cdn-kaspi.kz/yml/static/assets/badges/l12.svg";
  showDescription=false;
  isLiked=false;
  shareClick(url:string){
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent('look what i have found')}`;
    window.open(shareUrl, '_blank');
  }

  deleteClick(product: IProduct) {
    this.removeProduct.emit(product);

  }
  likeProduct(): void {
    if (!this.isLiked) {
      this.product.like++;
   } else {
      this.product.like--;
   }
      this.isLiked = !this.isLiked;

   }
  }
