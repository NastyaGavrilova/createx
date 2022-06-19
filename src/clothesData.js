import prod1 from "./assets/prod1.png";
import prod2 from "./assets/prod2.png";
import prod3 from "./assets/prod3.png";
import prod4 from "./assets/prod4.png";
import prod5 from "./assets/prod5.png";
import prod6 from "./assets/prod6.png";
import prod7 from "./assets/prod7.png";
import prod8 from "./assets/prod8.png";
import prod9 from "./assets/prod9.png";
import prod10 from "./assets/prod10.png";
import prod11 from "./assets/prod11.png";
import prod12 from "./assets/prod12.png";
import hoodie1 from "./assets/hoodie1.png";
import hoodie2 from "./assets/hoodie2.png";
import hoodie3 from "./assets/hoodie3.png";
import hoodie4 from "./assets/hoodie4.png";
import hoodie5 from "./assets/hoodie5.png";

const clothesData = [
  {
    id: 1,
    color: "Blue gray",
    category: "Shirt",
    title: "Shirt with insertion lace trims",
    link: "Shirt-with-insertion-lace-trims",
    price: "49.95",
    oldPrice: "40.80",
    image: prod1,
    imageSwiper1: prod1,
    imageSwiper2: prod1,
    imageSwiper3: prod1,
    imageSwiper4: prod1,
    imageSwiper5: prod1,
    size: "XS",
    material: "Cotton",
    number: "133762098",
  },
  {
    id: 2,
    color: "Dark blue",
    category: "Jeans",
    title: "Mid-rise slim cropped fit jeans",
    link: "Mid-rise-slim-cropped-fit-jeans",
    price: "40.00",
    oldPrice: "40.80",
    image: prod2,
    imageSwiper1: prod2,
    imageSwiper2: prod2,
    imageSwiper3: prod2,
    imageSwiper4: prod2,
    imageSwiper5: prod2,
    size: "S",
    material: "Synthetics",
    number: "184261098",
  },
  {
    id: 3,
    color: "Black",
    category: "Caps",
    title: "Black and white sport cap",
    link: "Black-and-white-sport-cap",
    price: "18.15",
    oldPrice: "40.80",
    image: prod3,
    imageSwiper1: prod3,
    imageSwiper2: prod3,
    imageSwiper3: prod3,
    imageSwiper4: prod3,
    imageSwiper5: prod3,
    size: "M",
    material: "Nappa leather",
    number: "183663098",
  },
  {
    id: 4,
    color: "Green",
    category: "Romper",
    title: "Green baby romper",
    link: "Green-baby-romper",
    price: "20.40",
    oldPrice: "40.80",

    image: prod4,
    imageSwiper1: prod4,
    imageSwiper2: prod4,
    imageSwiper3: prod4,
    imageSwiper4: prod4,
    imageSwiper5: prod4,
    size: "L",
    material: "Leather",
    number: "183292381",
  },
  {
    id: 5,
    color: "Orange",
    category: "Coats",
    title: "Check coat with colour contrast",
    link: "Check-coat-with-colour-contrast",
    price: "183.40",
    oldPrice: "40.80",
    image: prod5,
    imageSwiper1: prod5,
    imageSwiper2: prod5,
    imageSwiper3: prod5,
    imageSwiper4: prod5,
    imageSwiper5: prod5,
    size: "XL",
    material: "Cashmere",
    number: "183265634",
  },
  {
    id: 6,
    color: "Red",
    category: "Juwerly",
    title: "Red dangle earrings",
    link: "Red-dangle-earrings",
    price: "29.95",
    oldPrice: "40.80",
    image: prod6,
    imageSwiper1: prod6,
    imageSwiper2: prod6,
    imageSwiper3: prod6,
    imageSwiper4: prod6,
    imageSwiper5: prod6,
    size: "Plus Size",
    material: "Denim",
    number: "183260167",
  },
  {
    id: 7,
    color: "Beige",
    category: "Shoes",
    title: "Baby shoes with laces",
    link: "Baby-shoes-with-laces",
    price: "30.60",
    oldPrice: "40.80",
    image: prod8,
    imageSwiper1: prod8,
    imageSwiper2: prod8,
    imageSwiper3: prod8,
    imageSwiper4: prod8,
    imageSwiper5: prod8,
    size: "XS",
    material: "Cashmere",
    number: "183260012",
  },
  {
    id: 8,
    color: "Pink",
    category: "Sweetshirt",
    title: "Basic hooded sweatshirt in pink",
    link: "Basic-hooded-sweatshirt-in-pink",
    price: "15.50",
    oldPrice: "31.00",
    image: prod9,
    imageSwiper1: hoodie1,
    imageSwiper2: hoodie2,
    imageSwiper3: hoodie3,
    imageSwiper4: hoodie4,
    imageSwiper5: hoodie5,
    size: "XS",
    material: "Synthetics",
    number: "183260098",
  },
  {
    id: 9,
    color: "Dark blue",
    category: "Jeans",
    title: "Skinny push-up jeans",
    link: "Skinny-push-up-jeans",
    price: "40.00",
    oldPrice: "80.00",
    image: prod10,
    imageSwiper1: prod10,
    imageSwiper2: prod10,
    imageSwiper3: prod10,
    imageSwiper4: prod10,
    imageSwiper5: prod10,
    size: "L",
    material: "Synthetics",
    number: "173231498",
  },
  {
    id: 10,
    color: "Red",
    category: "Bags",
    title: "Leather crossbody bag with...",
    link: "Leather-crossbody-bag",
    price: "89.50",
    oldPrice: "179.00",
    image: prod11,
    imageSwiper1: prod11,
    imageSwiper2: prod11,
    imageSwiper3: prod11,
    imageSwiper4: prod11,
    imageSwiper5: prod11,
    size: "M",
    material: "Synthetics",
    number: "184269091",
  },
  {
    id: 11,
    color: "Grey",
    category: "Shoes",
    title: "Men fashion gray shoes",
    link: "Men-fashion-gray-shoes",
    price: "85.50",
    oldPrice: "179.00",
    image: prod12,
    imageSwiper1: prod12,
    imageSwiper2: prod12,
    imageSwiper3: prod12,
    imageSwiper4: prod12,
    imageSwiper5: prod12,
    size: "M",
    material: "Synthetics",
    number: "103184078",
  },
  {
    id: 12,
    color: "Black",
    category: "Clocks",
    title: "Chrono watch with blue...",
    link: "Chrono-watch-with-blue",
    price: "120.60",
    oldPrice: "40.80",
    image: prod7,
    imageSwiper1: prod7,
    imageSwiper2: prod7,
    imageSwiper3: prod7,
    imageSwiper4: prod7,
    imageSwiper5: prod7,
    size: "M",
    material: "Synthetics",
    number: "136267098",
    // color: "Black",
  },
].map((n, i) => ({ ...n, id: i + 1 }));

export default clothesData;
