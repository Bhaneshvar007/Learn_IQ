import React, { useContext } from 'react';
import Context from '../../../context';

const SavedData = () => {
    const { savedData } = useContext(Context);

    return (
        <div className="flex flex-wrap  gap-4 p-4 pl-10">
            {savedData && savedData.length > 0 ? (
                savedData.map((val, index) => (
                    <div
                        key={val.id || index}
                        className="p-6 m-2  max-w-[400px] bg-white border border-gray-200 pb-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h1 className="text-xl font-bold text-gray-800 mb-2">
                            {val.title || 'No title available'}
                        </h1>
                        <p className="text-gray-600 mb-2">
                            {val.description || 'Description not provided'}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                            {val.category || 'No category specified'}
                        </p>
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            Price: <span className="text-green-600">${val.price || '0.00'}</span>
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
                            onClick={() => alert(`Buying: ${val.title}`)}
                        >
                            Buy Now
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-lg">No saved courses to display.</p>
            )}
        </div>
    );
};

export default SavedData;
