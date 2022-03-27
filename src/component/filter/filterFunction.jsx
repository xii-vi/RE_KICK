export const filterFunction = (ListofProduct, category, sortBy, gender,priceRange,rating,brand) =>
{
  if(category.length !== 0) {
    ListofProduct = ListofProduct.filter((item => category.includes(item.category)))
  }
  if (sortBy) {
    ListofProduct = ListofProduct.sort((a, b) => sortBy === "LOWTOHIGH" ? a.price - b.price : b.price - a.price)
}
  if (gender) {
    
    ListofProduct = ListofProduct.filter(item => item.for==gender)
}
  if (priceRange) {
    ListofProduct =ListofProduct.filter(item => Number(item.price) <= priceRange)
}
  if(rating){
    ListofProduct = ListofProduct.filter(item => item.rating > rating)
}
if(brand.length !== 0) {
  ListofProduct = ListofProduct.filter((item => brand.includes(item.brand)))
}
return ListofProduct;
}