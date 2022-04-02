import axios from "axios";

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

    } catch (error) {
        console.log(error)
    }
}
const RemoveFromCart = async (productData, encodedToken) => {
    try {
        const response = await axios.delete(`/api/user/cart/${productData._id}`, {
            headers: {
                authorization: encodedToken
            }
        })
        const updatedCartData = JSON.parse(localStorage.getItem('userData'))
        updatedCartData.cart = [...response.data.cart]
        localStorage.setItem('userData', JSON.stringify(updatedCartData))
        }
        catch (error) {
        console.log(error);
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
        const updatedCartData = JSON.parse(localStorage.getItem('userData'))
        updatedCartData.cart = [...response.data.cart]
        localStorage.setItem('userData', JSON.stringify(updatedCartData))

    } catch (error) {
        console.log(error);

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
        const updatedCartData = JSON.parse(localStorage.getItem('userData'))
        updatedCartData.cart = [...response.data.cart]
        localStorage.setItem('userData', JSON.stringify(updatedCartData))
    } catch (error) {
        console.log(error);
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
        
        const updatedwishlistData = JSON.parse(localStorage.getItem('userData'))
        updatedwishlistData.wishlist = [...response.data.wishlist]
        localStorage.setItem('userData', JSON.stringify(updatedwishlistData))
    }
    catch {
        console.log(error);
    }

}
const RemoveFromWishlist = async (productData, encodedToken) => {
    try {
        const response = await axios.delete(`/api/user/wishlist/${productData._id}`, {
            headers: {
                authorization: encodedToken
            }
        })
        const updatedwishlistData = JSON.parse(localStorage.getItem('userData'))
        updatedwishlistData.wishlist = [...response.data.wishlist]
        localStorage.setItem('userData', JSON.stringify(updatedwishlistData))
        }
        catch (error) {
        console.log(error);
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