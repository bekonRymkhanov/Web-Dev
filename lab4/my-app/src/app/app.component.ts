import { Component } from '@angular/core';
import {convertToParamMap, RouterOutlet} from '@angular/router';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

interface Product {
  image:string;
  name:string;
  description:string;
  rating:number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class Catalog {
  products:Product[];
  constructor() {
    this.products=[chehol,iphone,type_c_adapter,barni,karina,sponge,Chocopie,ogurez,cola,kotex];
  }
  addNewProduct(product:Product){
    this.products.push(product);
  }
  shareClick(url:string){
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent('look what i have found')}`;
    window.open(shareUrl, '_blank');
  }


  protected readonly Product = Product;
}
class Product implements Product{
  title:string;
  image: string;
  name: string;
  description: string;
  rating: number;
  refToKaspi:string;
  sticker_red:string;
  sticker_green:string;
  price:number;
  showDescription:boolean;

  constructor(image:string,name:string,description:string,rating:number,refToKaspi:string,price:number) {
    this.title="Kaspi-Bank";
    this.image=image;
    this.name=name;
    this.description=description;
    this.rating=rating;
    this.refToKaspi=refToKaspi;
    this.sticker_green="https://resources.cdn-kaspi.kz/yml/static/assets/badges/b5.svg";
    this.sticker_red="https://resources.cdn-kaspi.kz/yml/static/assets/badges/l12.svg";
    this.price=price;
    this.showDescription=false;
  }

}

let type_c_adapter=new Product('assets/63961934823454.jpg',
  "Apple 20W USB-C Power Adapter белый",
  "-тип: сетевая зарядка\n"+"-количество подключаемых устройств: 1\n"+"-быстрая зарядка: Да\n"+"-разъем подключения: USB Type-C",
  4.3,
  'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
  4322);
let iphone=new Product("assets/iphone.jpg",
  "Apple iPhone 13 128Gb Midnight черный",
  "-технология NFC: Да\n" +"-цвет: черный\n" + "-тип экрана: OLED, Super Retina XDR\n" + "-диагональ: 6.1 дюйм\n" +"-размер оперативной памяти: 4 ГБ\n" + "-процессор: 6-ядерный Apple A15 Bionic\n" + "-объем встроенной памяти: 128.0 ГБ\n" + "-емкость аккумулятора: 3095.0 мАч",
  5.0,
  'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
  324667);
let chehol=new Product("assets/chehol.jpg",
  "Ala case для iPhone 11 прозрачный",
  "-тип: спортивный\n" + "-совместимый бренд: Apple\n" + "-материал: резина, ,силикон\n" + "-совместимые модели: iPhone 11",
  4.8,
  'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000',
  2330);
let barni=new Product("assets/barni.jpg",
  "Медвежонок Барни бисквит С молочной начинкой 150 г",
  "страна производства: Казахстан\n" + "условия хранения: хранить при температуре не выше +25°C и относительной влажности воздуха не более 75%\n" + "тип: бисквит\n" + "начинка: молочная",
  4.9,
  'https://kaspi.kz/shop/p/medvezhonok-barni-biskvit-s-molochnoi-nachinkoi-150-g-101179235/?c=750000000',
  599);
let karina=new Product("assets/toilet_paper.jpg",
  "Карина туалетная бумага 2-слойный 12 шт, вторичная",
  "тип: туалетная бумага\n" + "вид: рулонный\n" + "количество в упаковке: 12\n" + "материал: вторичная целлюлоза",
  3.2,
  'https://kaspi.kz/shop/p/karina-tualetnaja-bumaga-2-sloinyi-12-sht-vtorichnaja-tselljuloza-104962569/?c=750000000',
  1670);
let sponge=new Product("assets/sponge.jpg",
  "Мелочи жизни Пчелки крупнопористые 5 шт",
  "материал: поролон\n" + "тип: губка\n" + "назначение: для пола, ,для посуды, ,для сантехники",
  3.2,
  'https://kaspi.kz/shop/p/melochi-zhizni-pchelki-krupnoporistye-5-sht-101607499/?c=750000000',
  399);

let Chocopie=new Product("assets/ChockoPie.jpg",
  "Печенье ORION Choco Pie Original 360 г",
  "страна производства: Венгрия\n" + "условия хранения: хранить в сухом месте при температуре не выше 25° С и относительной влажности воздуха не более 75 %. Употребить сразу после вскрытия.\n" + "разновидность печенья: бисквитное\n" + "добавки: суфле",
  4.9,
  'https://kaspi.kz/shop/p/pechen-e-orion-choco-pie-original-360-g-101006400/?c=750000000',
  1334);
let ogurez=new Product("assets/Alikhan.jpg",
  "MAGNUM огурцы Миринда тепличные Казахстан",
  "страна производства: Казахстан\n" + "вид овощей: огурец",
  3.5,
  'https://kaspi.kz/shop/p/magnum-ogurtsy-mirinda-teplichnye-kazahstan-102219959/?c=750000000',
  2290);
let cola=new Product("assets/coca-cola.jpg",
  "Coca-Cola Classic газированный напиток 2 л",
  "страна производства: Казахстан\n" + "условия хранения: хранить в сухом месте при температуре от 0°С до +20°С, избегая прямого попадания солнечных лучей\n" +"тип: газированный напиток\n" + "без сахара: Нет\n" + "вкус: кола",
  5.0,
  'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-2-l-100208094/?c=750000000',
  615);
let kotex=new Product("assets/hmeli.jpg",
  "Омега специи хмели-сунели 20 г",
  "страна производства: Казахстан\n" + "вид специй: хмели-сунели\n" + "форма выпуска: измельченный",
  5.0,
  'https://kaspi.kz/shop/p/omega-spetsii-hmeli-suneli-20-g-100983965/?c=750000000',
  69);
