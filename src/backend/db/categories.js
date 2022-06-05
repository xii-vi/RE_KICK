import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "MEN",
    image:"https://superkicks.in/wp-content/uploads/2021/10/Men.jpg"
  },
  {
    _id: uuid(),
    categoryName: "WOMEN",
    image:"https://superkicks.in/wp-content/uploads/2021/10/Womenn.jpg"
  },
  {
    _id: uuid(),
    categoryName: "apparel",
    image:"https://superkicks.in/wp-content/uploads/2021/10/Apparel.jpg"
  },
];
