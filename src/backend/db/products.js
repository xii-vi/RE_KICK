import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "NIKE",
    model: "WOMEN's Air Force 1 Gypsy Rose",
    price:"9995",
    category:"Sneakers",
    image:"https://github.com/xii-vi/RE-Kick/blob/dev/assests/image/AIR%20FORCE%201%20FONTANKA%20GYPSY%20ROSE.jpg?raw=true",
    status:"",
    for:"WOMEN",
    rating:"3.8",
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Nike x Blazer Mid'77 Purple Glitter",
    price:"11995",
    category:"Sneakers",
    image:"https://github.com/xii-vi/RE-Kick/blob/dev/assests/image/Blazer%20Mid'77%20Purple%20Glitter.jpg?raw=true",
    status:"",
    for:"UNISEX",
    rating:"4.1"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Off-White x Air Jordan 1 High Chicago",
    price:"1230995",
    category:"Sneakers",
    image:"https://github.com/xii-vi/RE-Kick/blob/dev/assests/image/the-ten-air-jordan-1-off-white.jpg?raw=true",
    status:"GRAIL",
    for:"MEN",
    rating:"4.9",
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Air Jordan 4 Retro'RED-Thunder'",
    price:"39995",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/air-jordan-4-retro-'red-thunder'-ct8527016/display_picture.png",
    status:"HEAT",
    for:"UNISEX",
    rating:"4.2"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Air Jordan 1 Retro High OG Patent 'Bred'",
    price:"41095",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/air-jordan-1-retro-high-og-patent-'bred'-555088063/display_picture.png",
    status:"",
    for:"MEN",
    rating:"3.5"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Travis Scott x Air Jordan 6 Retro 'British Khaki'",
    price:"52995",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/travis-scott-x-air-jordan-6-retro-'british-khaki'-dh0690200/display_picture.png",
    status:"HEAT",
    for:"MEN",
    rating:"3.4"
  },
  {
    _id: uuid(),
    brand: "DREW",
    model: "Drew house deconstructed mascot hoodie 'Light Yellow'",
    price:"52995",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/drew-house-deconstructed-mascot-hoodie-'light-yellow'-deconstructedmascot/display_picture.png",
    status:"",
    for:"UNISEX",
    rating:"2.8"
  },
  {
    _id: uuid(),
    brand: "ESSENTIAL",
    model: "ESSENTIALS SSENSE Exclusive Beige Hoodie",
    price:"40995",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/essentials-ssense-exclusive-beige-pullover-hoodie-212161m202029/display_picture.png",
    status:"HEAT",
    for:"WOMEN",
    rating:"4.2"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Air Jordan 1 Retro High OG 'Electro Orange'",
    price:"30995",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/air-jordan-1-retro-high-og-'electro-orange'-555088180/display_picture.png",
    status:"",
    for:"WOMEN",
    rating:"1.8"
  },
  {
    _id: uuid(),
    brand: "DREW",
    model: "Drew House Mascot Hoodie 'Sky Blue'",
    price:" 22995",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/drew-house-mascot-hoodie-'sky-blue'-/display_picture.png",
    status:"",
    for:"UNISEX",
    rating:"2.9"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Nike SB x Wmns Dunk Low SE 'Candy'",
    price:"21095",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/wmns-dunk-low-se-'candy'-dd1872100/display_picture.png",
    status:"HEAT",
    status:"",
    for:"WOMEN",
    rating:"4.4"
  },
  {
    _id: uuid(),
    brand: "McDonald's",
    model: "Travis Scott x McDonald's (Limited)",
    price:"18995",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/travis-scott-x-mcdonald's-crew-t-shirt-mcdcrew/display_picture.png",
    status:"LIMITED",
    for:"UNISEX",
    rating:"4.3"
  },
  {
    _id: uuid(),
    brand: "ADIDAS",
    model: "Yeezy Boost 350 Version 2 'Mono Mist'",
    price:"43095",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/yeezy-boost-350-v2-'mono-mist'-gw2871/display_picture.png",
    status:"",
    for:"MEN",
    rating:"4.1"
  },
  {
    _id: uuid(),
    brand: "ESSENTIAL",
    model: "Fear-of-God x Essential (Limited)",
    price:"12095",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/fear-of-god-essentials-t-shirt---harvest-ss21/display_picture.png",
    status:"LIMITED",
    for:"MEN",
    rating:"3.3"
  },
  {
    _id: uuid(),
    brand: "ADIDAS",
    model: "Yeezy Boost 350 Version 2 'Ash Pearl'",
    price:"32095",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/yeezy-boost-350-v2-'ash-pearl'-gy7658/display_picture.png",
    status:"",
    for:"WOMEN",
    rating:"4.7"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Air Jordan 1 Retro High OG 'Volt Gold'",
    price:"24095",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/air-jordan-1-retro-high-og-'volt-gold'-555088118/display_picture.png",
    status:"",
    for:"UNISEX",
    rating:"4.2"
  },
  {
    _id: uuid(),
    brand: "ESSENTIAL",
    model: "Fear of God Essentials Knit Pullover Hoodie - Harvest",
    price:"32095",
    category:"Streetwear",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/fear-of-god-essentials-knit-pullover-hoodie---harvest-ss21/display_picture.png",
    status:"",
    for:"UNISEX",
    rating:"3.1"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Nike SB x Wmns Dunk Low 'Green Glow",
    price:"51095",
    category:"Sneakers",
    image:"https://res.cloudinary.com/dx8gt3nnu/image/upload/q_auto,f_auto/dryp-shoe-pictures/wmns-dunk-low-'green-glow'-dd1503105/display_picture.png",
    status:"",
    for:"WOMEN",
    rating:"2.9"
  },
];
