import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Air Force 1 GYPSY ROSE",
    price:"₹9,995",
    category:"Sneakers",
    image:"https://github.com/xii-vi/RE-Kick/blob/dev/assests/image/AIR%20FORCE%201%20FONTANKA%20GYPSY%20ROSE.jpg?raw=true"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Blazer Mid'77 Purple Glitter",
    price:"₹11,995",
    category:"Sneakers",
    image:"https://github.com/xii-vi/RE-Kick/blob/dev/assests/image/Blazer%20Mid'77%20Purple%20Glitter.jpg?raw=true"
  },
  {
    _id: uuid(),
    brand: "NIKE",
    model: "Off-White x Air Jordan 1 High Chicago",
    price:"₹12,30,995",
    category:"Sneakers",
    image:"https://github.com/xii-vi/RE-Kick/blob/dev/assests/image/the-ten-air-jordan-1-off-white.jpg?raw=true"
  }
];
