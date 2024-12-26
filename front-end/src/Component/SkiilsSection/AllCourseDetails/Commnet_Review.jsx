import React from 'react'

const Commnet_Review = () => {
    return (
        <div>
            <form action="">
                <textarea type="text" placeholder='write your comment' rows={6} className='border border-gray-300 w-full rounded p-2 outline-1 outline-purple-500 ' />
                <button className='py-2 bg-purple-500 px-5 mt-3 rounded text-white font-semibold text-sm'>Comment</button>
            </form>
        </div>
    )
}

export default Commnet_Review
