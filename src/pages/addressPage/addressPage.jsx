import { useState } from 'react'
import { useAddress } from "../../context/addressContext"
import { AddressModal } from '../../component/modal/addressModal';
import { AddressCard } from '../../component/card/addressCard';
export const AddressPage = ({ setModal }) => {
    const [showModal, setShowModal] = useState(false);
    const [editAddress, setEditAddress] = useState(null);
    const { addressList } = useAddress();
    const AddAddressHandler = () => {
        setEditAddress(null)
        setShowModal(true);
    }
    return (
        <div>
        <div className='p-4'>
            {showModal && <AddressModal setShowModal={setShowModal} editAddress={editAddress} />}
            <button
                className='btn btn-primary'
                onClick={AddAddressHandler}>
                Add New Address
            </button>
            <div className="flex m-4">
                {addressList.length > 0 ? (addressList.map((address) =>
                    <AddressCard
                        address={address}
                        key={address._id}
                        setShowModal={setShowModal}
                        setEditAddress={setEditAddress}
                        setModal={setModal} />
                )) : (
                    <li>Please add a address.</li>
                )
                }
            </div>
        </div>
        </div>
    )
}