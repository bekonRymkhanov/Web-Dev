import { IProduct } from "../Models/product";



export const products:IProduct[]=[
  {
    image:'assets/63961934823454.jpg',
    name:"Apple 20W USB-C Power Adapter белый",
    description:"-тип: сетевая зарядка\n"+"-количество подключаемых устройств: 1\n"+"-быстрая зарядка: Да\n"+"-разъем подключения: USB Type-C",
    rating:4.3,
    refToKaspi: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    price:4322,
    like:12,
    category:"technical"
  },
  {
    image:"assets/iphone.jpg",
    name:"Apple iPhone 13 128Gb Midnight черный",
    description:"-технология NFC: Да\n" +"-цвет: черный\n" + "-тип экрана: OLED, Super Retina XDR\n" + "-диагональ: 6.1 дюйм\n" +"-размер оперативной памяти: 4 ГБ\n" + "-процессор: 6-ядерный Apple A15 Bionic\n" + "-объем встроенной памяти: 128.0 ГБ\n" + "-емкость аккумулятора: 3095.0 мАч",
    rating:5.0,
    refToKaspi:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    price:324667,
    like:22,
    category:"technical"},
  {
    image:"assets/chehol.jpg",
    name:"Ala case для iPhone 11 прозрачный",
    description:"-тип: спортивный\n" + "-совместимый бренд: Apple\n" + "-материал: резина, ,силикон\n" + "-совместимые модели: iPhone 11",
    rating:4.8,
    refToKaspi: 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000',
    price:2330,
    like:82,
    category:"accessories"},
  {
    image:"assets/barni.jpg",
    name:"Медвежонок Барни бисквит С молочной начинкой 150 г",
    description:"страна производства: Казахстан\n" + "условия хранения: хранить при температуре не выше +25°C и относительной влажности воздуха не более 75%\n" + "тип: бисквит\n" + "начинка: молочная",
    rating:4.9,
    refToKaspi: 'https://kaspi.kz/shop/p/medvezhonok-barni-biskvit-s-molochnoi-nachinkoi-150-g-101179235/?c=750000000',
    price:599,
    like:32,
    category:"food"},
  {
    image:"assets/toilet_paper.jpg",
    name:"Карина туалетная бумага 2-слойный 12 шт, вторичная",
    description:"тип: туалетная бумага\n" + "вид: рулонный\n" + "количество в упаковке: 12\n" + "материал: вторичная целлюлоза",
    rating:3.2,
    refToKaspi: 'https://kaspi.kz/shop/p/karina-tualetnaja-bumaga-2-sloinyi-12-sht-vtorichnaja-tselljuloza-104962569/?c=750000000',
    price: 1670,
    like:62,
    category:"home"},
  {
    image:"assets/sponge.jpg",
    name:"Мелочи жизни Пчелки крупнопористые 5 шт",
    description:"материал: поролон\n" + "тип: губка\n" + "назначение: для пола, ,для посуды, ,для сантехники",
    rating: 3.2,
    refToKaspi:'https://kaspi.kz/shop/p/melochi-zhizni-pchelki-krupnoporistye-5-sht-101607499/?c=750000000',
    price: 399,
    like:72,
    category:"home"
  },
  {
    image:"assets/ChockoPie.jpg",
    name:"Печенье ORION Choco Pie Original 360 г",
    description:"страна производства: Венгрия\n" + "условия хранения: хранить в сухом месте при температуре не выше 25° С и относительной влажности воздуха не более 75 %. Употребить сразу после вскрытия.\n" + "разновидность печенья: бисквитное\n" + "добавки: суфле",
    rating:4.9,
    refToKaspi:'https://kaspi.kz/shop/p/pechen-e-orion-choco-pie-original-360-g-101006400/?c=750000000',
    price: 1334,
    like:111,
    category:"food"
  },
  {
    image:"assets/Alikhan.jpg",
    name:"MAGNUM огурцы Миринда тепличные Казахстан",
    description:"страна производства: Казахстан\n" + "вид овощей: огурец",
    rating:2.5,
    refToKaspi:'https://kaspi.kz/shop/p/magnum-ogurtsy-mirinda-teplichnye-kazahstan-102219959/?c=750000000',
    price: 2290,
    like:22,
    category:"food"
  },
  {
    image:"assets/coca-cola.jpg",
    name:"Coca-Cola Classic газированный напиток 2 л",
    description:"страна производства: Казахстан\n" + "условия хранения: хранить в сухом месте при температуре от 0°С до +20°С, избегая прямого попадания солнечных лучей\n" +"тип: газированный напиток\n" + "без сахара: Нет\n" + "вкус: кола",
    rating: 5.0,
    refToKaspi:'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-2-l-100208094/?c=750000000',
    price:615,
    like:121,
    category:"food"
  },
  {
    image:"assets/hmeli.jpg",
    name:"Омега специи хмели-сунели 20 г",
    description:"страна производства: Казахстан\n" + "вид специй: хмели-сунели\n" + "форма выпуска: измельченный",
    rating:5.0,
    refToKaspi:'https://kaspi.kz/shop/p/omega-spetsii-hmeli-suneli-20-g-100983965/?c=750000000',
    price:69,
    like:82,
    category:"food"

  },
  {
    image:"assets/toaster.jpg",
    name:"Тостер ARNICA Diamond Sandwich Maker Purple фиолетовый",
    description:"тип управления: механическое\n" + "количество тостов: 6\n" + "поддон для крошек: Нет\n" + "материал корпуса: металл\n" + "цвет: фиолетовый",
    rating:4.6,
    refToKaspi:'https://kaspi.kz/shop/p/arnica-diamond-sandwich-maker-purple-fioletovyi-106030762/?c=750000000',
    price:47500,
    like:203,
    category:"technical"

  },
  {
    image:"assets/pavilion.jpg",
    name:"Кулер для HP Pavilion DV6-7000, DV7-7000, DV6t-7000, Envy DV6, DV7, Dell Inspiron 7720",
    description:"совместимый бренд: HP\n" + "тип: кулер\n" + "совместимые модели: Pavilion DV6-7000, DV7-7000, DV6t-7000, Envy DV6, DV7, Dell Inspiron 7720",
    rating:5.0,
    refToKaspi:'https://kaspi.kz/shop/p/kuler-dlja-hp-pavilion-dv6-7000-dv7-7000-dv6t-7000-envy-dv6-dv7-dell-inspiron-7720-116212346/?c=750000000',
    price:7000,
    like:11,
    category:"technical"

  },
  {
    image:"assets/beeline.jpg",
    name:"Beeline 4G L02Hi B черный",
    description:"тип: Wi-Fi роутер\n" + "максимальная скорость беспроводного соединения: 150.0 Мбит/с",
    rating:4.0,
    refToKaspi:'https://kaspi.kz/shop/p/beeline-4g-l02hi-b-chernyi-101006082/?c=750000000',
    price:88500,
    like:29,
    category:"technical"

  },
  {
    image:"assets/kreslo.jpg",
    name:"Плюшевая радость Кресло мини маус кресло, обивка текстиль, 52x50x40 см",
    description:"тип: кресло\n" + "материал обивки: текстиль\n" + "материал рамы: поролон\n" + "исполнение: тканевое\n" + "высота: 52.0 см\n" + "ширина: 50.0 см\n" + "цвет: красный",
    rating:3.2,
    refToKaspi:'https://kaspi.kz/shop/p/pljushevaja-radost-kreslo-mini-maus-kreslo-obivka-tekstil-52x50x40-sm--102437215/?c=750000000',
    price:10304,
    like:3,
    category:"home"

  },
  {
    image:"assets/pasta.jpg",
    name:"SPLAT зубная паста Лечебные травы 100 мл",
    description:"тип: зубная паста\n" + "вкус: мятный\n" + "объем, мл/Вес, г: 100 мл",
    rating:4.7,
    refToKaspi:'https://kaspi.kz/shop/p/splat-zubnaja-pasta-lechebnye-travy-100-ml-100194779/?c=750000000',
    price:870,
    like:3,
    category:"home"

  },
  {
    image:"assets/kolco.jpg",
    name:"Кольцо GOLDOS DR9033 размер 17.5 вес 2.9 г золото, бриллиант",
    description:"вид изделия: кольцо\n" + "размер: 17.5\n" + "примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических\n" + "для кого: для женщин\n" + "проба: 750\n" + "материал: золото\n" + "вставка: бриллиант\n" + "страна производитель: Израиль\n" + "вес изделия: 2.9 г",
    rating:0.0,
    refToKaspi:'https://kaspi.kz/shop/p/goldos-dr9033-razmer-17-5-ves-2-9-g-zoloto-brilliant-107349888/?c=750000000',
    price:3500000,
    like:0,
    category:"accessories"

  },
  {
    image:"assets/cover.jpg",
    name:"Декоративный коврик 60x120 см, Insta Cat 468017",
    description:"тип: декоративный коврик\n" + "форма: нестандартная\n" + "материал: микрофибра\n" + "рисунок: детский\n" + "ширина, см: 60\n" + "длина: 120.0 см\n" + "страна-изготовитель: Китай\n" + "цвет: бежевый, ,серый",
    rating:5.0,
    refToKaspi:'https://kaspi.kz/shop/p/dekorativnyi-kovrik-60x120-sm-insta-cat-468017-112537694/?c=750000000',
    price:13790,
    like:22,
    category:"home"

  },
  {
    image:"assets/ochki.jpg",
    name:"Солнцезащитные очки KDEAM P9078 C2 овальные поляризованные",
    description:"форма линз: овальные\n" + "тип линз: поляризованные\n" + "чехол: Да\n" + "цвет линз: черный\n" + "материал оправы: пластик\n" + "для кого: для женщин, ,для мужчин\n" + "цвет: серый",
    rating:4.4,
    refToKaspi:'https://kaspi.kz/shop/p/kdeam-p9078-c2-oval-nye-poljarizovannye-103717633/?c=750000000',
    price:1493,
    like:10,
    category:"accessories"

  },
  {
    image:"assets/casio.jpg",
    name:"Часы Кварцевые CASIO MTP-1374D-1AVDF сталь",
    description:"способ отображения времени: аналоговый (стрелки)\n" + "тип: кварцевые\n" + "материал корпуса: сталь\n" + "противоударные: Нет\n" + "для кого: для мужчин\n" + "цвет: серебристый",
    rating:4.1,
    refToKaspi:'https://kaspi.kz/shop/p/kvartsevye-casio-mtp-1374d-1avdf-stal--21401209/?c=750000000',
    price:40290,
    like:83,
    category:"accessories"

  },
  {
    image:"assets/bandit.jpg",
    name:"Балаклава MU-0529 размер универсальный, черный",
    description:"тип: балаклава\n" + "сезон: зима, ,демисезон\n" + "состав: хлопок\n" + "цвет: черный\n" + "для кого: для женщин, ,для мужчин",
    rating:5.0,
    refToKaspi:'https://kaspi.kz/shop/p/balaklava-mu-0529-razmer-universal-nyi-chernyi-106601321/?c=750000000',
    price:1850,
    like:82,
    category:"accessories"

  },
]
export const categories:string[]=["technical","accessories","food","home","all"]
