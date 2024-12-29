import React, { useContext } from "react";
import Context from "../../../context";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';

const stripePromise = loadStripe("pk_test_51QYQy9RwQI6fsucQQXGvVR83RNcSIPH8Mjf1XBQxXRhQnX02Tbgi09oc5FFXMXQxCJPxGElUfJVx2AXnu3YAZQ2j00uecnFEHr");

const AddToCart = () => {
    const { cartData, setCartData } = useContext(Context);

    const handlePayment = async () => {
        if (cartData.length === 0) {
            alert("Your cart is empty. Add items to proceed.");
            return;
        }

        const totalAmount = cartData.reduce((sum, item) => sum + item.price, 0);


        try {
            const stripe = await stripePromise;

            const response = await fetch("http://localhost:3000/api/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ items: cartData, totalAmount }),
            });

            if (!response.ok) throw new Error("Failed to create payment session");

            const session = await response.json();

            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) alert(result.error.message);
        } catch (error) {
            console.error("Payment failed:", error);
            alert("Payment failed. Please try again.");
        }
    };


    const handleDelete = (id) => {
        const updatedCart = cartData.filter(item => item._id != id); // Remove item with the given id
        setCartData(updatedCart); // Update state
        localStorage.setItem('cartData', JSON.stringify(updatedCart)); // Update localStorage
    };






    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>


            {cartData.length === 0 ? (
                <div className="text-center mt-10 h-screen">
                    <p className="text-gray-500 mb-4">Your cart is empty. Add items to see them here.</p>
                    <Link to="/" className="text-blue-500 hover:underline">
                        Back to Home
                    </Link>
                </div>
            ) : (
                <div className="flex flex-wrap">
                    {
                        cartData.map((val, index) => (
                            <div
                                key={val.id || index}
                                className="p-6 m-2 pb-5 w-full flex items-center gap-5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                            >
                                {/* Delete Icon */}
                                <button
                                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
                                    onClick={() => handleDelete(val._id)} // handleDelete is a function to remove the item
                                >
                                    <FaTrash size={20} />
                                </button>

                                <img
                                    className="h-20 object-cover rounded-md"
                                    src="https://static.vecteezy.com/system/resources/thumbnails/046/437/255/small_2x/udemy-logo-on-a-white-square-app-icon-free-png.png"
                                    alt="img"
                                />

                                <div className="flex flex-col flex-1">
                                    <h1 className="text-xl font-bold text-gray-800 mb-2">{val.title}</h1>
                                    <p className="text-gray-600 mb-2">{val.description}</p>
                                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                        Price: <span className="text-green-600">${val.price}</span>
                                    </h2>
                                </div>

                                <button
                                    className="w-[150px] bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                                    onClick={handlePayment}
                                >
                                    Buy Now
                                </button>
                            </div>

                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default AddToCart;
