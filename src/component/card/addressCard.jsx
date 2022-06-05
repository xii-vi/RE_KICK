import React from 'react'
import { useAddress } from '../../context/addressContext';
import "./card.css"
export const AddressCard = ({ address, setShowModal, setEditAddress, setModal }) => {
    const { selectedAddressId, addressDispatch } = useAddress();
    const editAddressHandler = () => {
        setShowModal(true)
        setEditAddress(address)
    }
    const removeAddressHandler = () => {
        addressDispatch({ type: "REMOVE_ADDRESS", payload: address._id })
    }
    const selectAddressHandler = () => {
        addressDispatch({ type: "EDIT_SELECTED_ADDRESS", payload: address._id })
        setModal?.(false)
    }
    const shippingAddress =()=>{
        addressDispatch({ type: "SELECTED_ADDRESS_DATA", payload: address._id })
    }
    return (
        <div className='address-card p-2 m-2'>
                <label>
                    <input
                        type="radio"
                        name="address"
                        checked={address._id === selectedAddressId}
                        onChange={selectAddressHandler} 
                        onClick={shippingAddress}
                        />
                    <div>
                        <p>{address.Name}</p>
                        <p>{address.home} , {address.state}</p>
                        <p>{address.country},{address.pinCode}</p>
                        <p>{address.mobileNumber}</p>
                    </div>
                </label>
                <button className="btn btn-primary mr-4" onClick={editAddressHandler}>Edit</button>
                <button className="btn btn-primary" onClick={removeAddressHandler}>Remove</button>
        </div>
    )
}