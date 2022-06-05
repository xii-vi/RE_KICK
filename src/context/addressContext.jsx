import { useContext, createContext, useReducer } from 'react'
import { AddressReducer } from "../reducer/addressReducer";
const AddressContext = createContext();
const AddressProvider = ({ children }) => {
    const [addressState, addressDispatch] = useReducer(AddressReducer, {
        addressList: [], 
        selectedAddressId: "", 
        orders: [],
        selectedAddressData:[],
        })
    const { addressList, selectedAddressId,orders,selectedAddressData } = addressState;
    return (<AddressContext.Provider value={{ addressList, selectedAddressId, orders, selectedAddressData, addressDispatch }}>
        {children}
    </AddressContext.Provider>)
}

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress }