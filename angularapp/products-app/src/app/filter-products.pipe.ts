import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "./Models/product";

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(products:IProduct[],search:string): IProduct[] {
    return products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));
  }

}
