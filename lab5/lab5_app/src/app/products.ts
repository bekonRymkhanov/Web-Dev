export interface Product {
  image:string;
  name:string;
  description:string;
  rating:number;
  refToKaspi:string;
  price:number;
  category:string;

}
export const categories=["technical","accessories"]
export const products=
[
  {
    image:'assets/63961934823454.jpg',
    name:"Apple 20W USB-C Power Adapter белый",
    description:"-тип: сетевая зарядка\n"+"-количество подключаемых устройств: 1\n"+"-быстрая зарядка: Да\n"+"-разъем подключения: USB Type-C",
    rating:4.3,
    refToKaspi: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    price:4322,
    category:"technical"
  },
  {
    image:"assets/iphone.jpg",
    name:"Apple iPhone 13 128Gb Midnight черный",
    description:"-технология NFC: Да\n" +"-цвет: черный\n" + "-тип экрана: OLED, Super Retina XDR\n" + "-диагональ: 6.1 дюйм\n" +"-размер оперативной памяти: 4 ГБ\n" + "-процессор: 6-ядерный Apple A15 Bionic\n" + "-объем встроенной памяти: 128.0 ГБ\n" + "-емкость аккумулятора: 3095.0 мАч",
    rating:5.0,
    refToKaspi:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    price:324667,
    category:"technical"},
  {
    image:"assets/chehol.jpg",
    name:"Ala case для iPhone 11 прозрачный",
    description:"-тип: спортивный\n" + "-совместимый бренд: Apple\n" + "-материал: резина, ,силикон\n" + "-совместимые модели: iPhone 11",
    rating:4.8,
    refToKaspi: 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000',
    price:2330,
    category:"accessories"},
]
