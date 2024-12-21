import React, { useContext } from 'react'
import Context from '../../../context'

const AddToCart = () => {

    let { cartData } = useContext(Context);
    console.log(cartData, "sdfghjk");

    return (
        <div>
            {
                cartData.map((val) => {
                    return (
                        <div className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h1 className="text-xl font-bold text-gray-800 mb-2">{val.title}</h1>
                            <p className="text-gray-600 mb-2">{val.description}</p>
                            <p className="text-sm text-gray-500 mb-4">{val.category}</p>
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                Price: <span className="text-green-600">${val.price}</span>
                            </h2>
                            <video
                                src={val.video}
                                controls
                                className="w-full h-40 object-cover rounded-md border border-gray-300 mb-4"
                            />
                            <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                                Buy Now
                            </button>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default AddToCart
