import React from 'react'

const Tabs = ({ activeTab, tabs, setActiveTab }) => {
    return (
        <div>
            <div className="flex space-x-4 overflow-x-auto border-b pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`py-2 px-4 text-sm  ${activeTab === tab
                            ? "border-b-2 border-black text-black font-semibold capitalize "
                            : "text-gray-500 hover:text-black capitalize"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Tabs
