const isItemInCart = (productID,cartItem)=>{
    return cartItem.find(({
        id
    }) => id === productID)
}
const isItemInWishlist = (productID,wishlistItem)=>{
    return wishlistItem.find(({
        id
    }) => id === productID)
}
export {
    isItemInCart,
    isItemInWishlist
}