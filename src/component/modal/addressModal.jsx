import { useState } from "react";
import { useAddress } from "../../context/addressContext";
import { v4 as uuid } from "uuid";
import "./addressModal.css"
export const AddressModal = ({ setShowModal, editAddress })=>{
    const { addressDispatch } = useAddress();
    const [formDetails, setFormDetails] = useState(
        editAddress ?? {
            Name: "",
            mobileNumber: "",
            home: "",
            state: "",
            country: "",
            pinCode: "",
        })
    const addressDetails =
    {
    Name: "Rohit Abhishek",
    mobileNumber: "9570306818",
    pinCode: "802311",
    home: "House no: 17, Adarsh Colony",
    state: "Bihar",
    country: "India",
    }
    const dummyDataHandler = () => {
        setFormDetails(addressDetails);
    }
    const inputHandler = (e, field) => {
        setFormDetails((pre) => ({
            ...pre, [field]: e.target.value
        }))
    }
    const formHandler = (e) => {
        e.preventDefault()
        addressDispatch({
            type: "UPDATE_ADDRESS",
            payload: !editAddress
                ? { _id: uuid(), ...formDetails }
                : { isEdit: true, addressList: formDetails },
        })
        setShowModal(false);
    }
    return(
        <div className="modal-active flex center-flex">
        <div className="modal-container p-4">
            <form onSubmit={formHandler}>
            <div className="flex center-flex">
            <span className="address-modal-heading">Add New Address</span>
                <button className='btn margin-left-auto btn-primary' onClick={() => setShowModal(false)}>
                <i className="fa fa-times"></i>
                </button>
            </div>
                <input
                    placeholder="Enter your name"
                    className="input-field"
                    type="text"
                    id="Name"
                    value={formDetails.Name}
                    required
                    onChange={(e) => inputHandler(e, "Name")}
                />
                <input
                    placeholder="Enter mobile number"
                    className="input-field"
                    type="number"
                    id="mobileNumber"
                    value={formDetails.mobileNumber}
                    required
                    onChange={(e) => inputHandler(e, "mobileNumber")}
                />
                <input
                    placeholder="Pin code"
                    className="input-field"
                    type="number"
                    id="pinCode"
                    value={formDetails.pinCode}
                    required
                    onChange={(e) => inputHandler(e, "pinCode")}
                />
                <input
                    placeholder="Enter house number, flat number"
                    className="input-field"
                    type="text"
                    id="home"
                    value={formDetails.home}
                    required
                    onChange={(e) => inputHandler(e, "home")}
                />
                <input 
                    placeholder="Enter your state"
                    className="input-field"
                    type="text"
                    id="state"
                    value={formDetails.state}
                    required
                    onChange={(e) => inputHandler(e, "state")}
            />
                <select
                    placeholder="Enter your country"
                    className="input-field"
                    type="text"
                    id="country"
                    onChange={(e) => inputHandler(e, "country")}>
                    <option value="India">India</option>
                    <option value="United state">United State</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                </select>
            <div className="py-4 flex center-flex">
            <button
                type="button"
                className='btn btn-primary'
                onClick={dummyDataHandler}>Fill with dummy address
            </button>
            </div>
            <div className="flex center-flex">
            <button className='btn btn-primary mr-5'>Save</button>
            <button onClick={() => setShowModal(false)} className='btn btn-primary ml-2'>Cancel</button>
            </div>
        </form>
    </div>
</div>
    )
}