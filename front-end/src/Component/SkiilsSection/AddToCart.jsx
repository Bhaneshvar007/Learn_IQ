import React, { useContext } from "react";
import Context from "../../../context";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51QYQy9RwQI6fsucQQXGvVR83RNcSIPH8Mjf1XBQxXRhQnX02Tbgi09oc5FFXMXQxCJPxGElUfJVx2AXnu3YAZQ2j00uecnFEHr");

const AddToCart = () => {
    const { cartData } = useContext(Context);

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

    return (
        <div className="flex flex-wrap h-screen">
            {cartData.length === 0 ? (
                <div className="flex  gap-5 mt-10">
                    <p className="text-center text-gray-500 ml-10">
                        Your cart is empty. Add items to see them here.
                    </p>
                    <Link to='/' className="text-blue-500 hover:underline">
                        back to Home
                    </Link>
                </div>
            ) : (
                cartData.map((val, index) => (
                    <div
                        key={val.id || index}
                        className="p-6 m-2 h-[480px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h1 className="text-xl font-bold text-gray-800 mb-2">{val.title}</h1>
                        <p className="text-gray-600 mb-2">{val.description}</p>
                        <p className="text-sm text-gray-500 mb-4">{val.category}</p>
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            Price: <span className="text-green-600">${val.price}</span>
                        </h2>
                        {val.videos ? (
                            <video
                                src={val.videos}
                                controls
                                className="w-full h-56 object-cover rounded-md border border-gray-300 mb-4"
                            />
                        ) : (
                            <p className="text-center text-gray-400 mb-4">No video available</p>
                        )}
                        <button
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                            onClick={handlePayment}
                        >
                            Buy Now
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default AddToCart;
