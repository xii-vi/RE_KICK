export const addToCartReducer=(state, dispatch)=>{
    switch(dispatch.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cartItem: [...state.cartItem, {
                    ...dispatch.payload,
                    quantity: 1
                }]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItem: state.cartItem.filter((item) => item.id !== dispatch.payload.id)
            }
            case "INCREASE_CART_ITEM":
            return {
                ...state,
                cartItem: state.cartItem.map((item) => item.id === dispatch.payload.id ? {
                ...item,
                quantity: item.quantity + 1
            } : item)
        }
        case "DECREASE_CART_ITEM":
            return {
                ...state,
                cartItem: state.cartItem.map((item) => item.id === dispatch.payload.id ? {
                    ...item,
                    quantity: item.quantity - 1
                } : item)
            }
        default:
            state;
    }
}
