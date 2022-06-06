import axios from "axios";
import { toast } from "react-toastify";

const updateCartItem = async(productData, encodedToken) => {
    try {
        const response = await axios.post("/api/user/cart", {
            product: {
                ...productData,
            }
        }, {
            headers: {
                authorization: encodedToken
            }
        })
        const updatedCartData = JSON.parse(localStorage.getItem('userData'))
        updatedCartData.cart = [...response.data.cart]
        localStorage.setItem('userData', JSON.stringify(updatedCartData))
        toast.success("Added to the Cart!",{
            theme: "dark"
        });

    } catch (error) {
        toast.error("Some Error Occured!",{
            theme: "dark"
        });
    }
}
const RemoveFromCart = async (productData, encodedToken) => {
    try {
        const response = await axios.delete(`/api/user/cart/${productData._id}`, {
            headers: {
                authorization: encodedToken
            }
        })
        toast.error("Removed from the Cart!",{
            theme: "dark"
        });
        const updatedCartData = JSON.parse(localStorage.getItem('userData'))
        updatedCartData.cart = [...response.data.cart]
        localStorage.setItem('userData', JSON.stringify(updatedCartData))
        }
        catch (error) {
        toast.error("Some Error Occured!",{
            theme: "dark"
        });;
        }

}

const IncreaseCartQuantity = async (productData, encodedToken) => {
console.log(productData)
    try {
        const response = await axios.post(`/api/user/cart/${productData._id}`, {
            action: {
                type: "increment"
            }
        }, {
            headers: {
                authorization: encodedToken
            }
        })
        toast.success(<p> Cart Quantity increased.</p>)
        const updatedCartData = JSON.parse(localStorage.getItem('userData'))
        updatedCartData.cart = [...response.data.cart]
        localStorage.setItem('userData', JSON.stringify(updatedCartData))

    } catch (error) {
        toast.error("Some Error Occured!",{
            theme: "dark"
        });;

    }
}

const DecreaseCartQuantity = async (productData, encodedToken) => {
    try {
        const response = await axios.post(`/api/user/cart/${productData._id}`, {
            action: {
                type: "decrement"
            }
        }, {
            headers: {
                authorization: encodedToken
            }
        })
        toast.success(<p> Cart Quantity decreased.</p>)
        const updatedCartData = JSON.parse(localStorage.getItem('userData'))
        updatedCartData.cart = [...response.data.cart]
        localStorage.setItem('userData', JSON.stringify(updatedCartData))
    } catch (error) {
        toast.error("Some Error Occured!",{
            theme: "dark"
        });;
    }
}
const updateWishlistItem = async (productData, encodedToken) => {
    try {
        const response = await axios.post("/api/user/wishlist", {
            product: {
                ...productData,
            }
        }, {
            headers: {
                authorization: encodedToken
            }
        })
        toast.success("Added to the Wishlist!",{theme:"dark"})
        const updatedwishlistData = JSON.parse(localStorage.getItem('userData'))
        updatedwishlistData.wishlist = [...response.data.wishlist]
        localStorage.setItem('userData', JSON.stringify(updatedwishlistData))
    }
    catch {
        toast.error("Some Error Occured!",{
            theme: "dark"
        });;
    }

}
const RemoveFromWishlist = async (productData, encodedToken) => {
    try {
        const response = await axios.delete(`/api/user/wishlist/${productData._id}`, {
            headers: {
                authorization: encodedToken
            }
        })
        toast.error("Removed from the Wishlist!",{theme:"dark"});
        const updatedwishlistData = JSON.parse(localStorage.getItem('userData'))
        updatedwishlistData.wishlist = [...response.data.wishlist]
        localStorage.setItem('userData', JSON.stringify(updatedwishlistData))
        }
        catch (error) {
        toast.error("Some Error Occured!",{
            theme: "dark"
        });;
        }
}

export {
    updateCartItem,
    IncreaseCartQuantity,
    DecreaseCartQuantity,
    RemoveFromCart,
    updateWishlistItem,
    RemoveFromWishlist
} 