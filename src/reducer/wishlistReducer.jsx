export const wishlistReducer = (state , Action) => {
    switch (Action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlistItem: [...state.wishlistItem, {
                    ...Action.payload,
                    quantity: 1
                }]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlistItem: state.wishlistItem.filter((item) => item.id !== Action.payload.id)
            }
        default:
            return state;
    }
}