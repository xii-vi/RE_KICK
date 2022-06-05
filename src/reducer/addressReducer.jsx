export const AddressReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_ADDRESS":
            return { ...state, addressList: [...state.addressList, payload] }
        case "REMOVE_ADDRESS":
            return {
                ...state,
                selectedAddressId: state.selectedAddressId !== payload ? state.selectedAddressId : "", addressList: state.addressList.filter(({ _id }) => _id !== payload)
            }
        case "SELECTED_ADDRESS_DATA":
        return{
            ...state,
            selectedAddressData: state.addressList.filter(address=>address._id === payload)
        }
        case "UPDATE_ADDRESS":
            return payload?.isEdit ?
                {
                    ...state,
                    addressList: state.addressList.map((address) => address._id === payload.addressList._id ? { ...address, ...payload.addressList } : address),
                } : {
                    ...state,
                    addressList: [payload, ...state.addressList]
                }
        case "EDIT_SELECTED_ADDRESS":
            return { ...state, selectedAddressId: payload }
        case "ADD_ORDERS":
            return { ...state, orders: [payload, ...state.orders] }
        default:
            return state;
    }
}