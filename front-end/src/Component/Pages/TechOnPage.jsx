import React from 'react'
import TechOnSlide from './TechOnSlide'

const TechOnPage = () => {


    let techOn = [
        {
            img: 'https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg',
            h1: 'Teach your way',
            p: 'Publish the course you want, in the way you want, and always have control of your own content.'
        },
        {
            img: 'https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg',
            h1: 'Inspire learners',
            p: 'Teach what you know and help learners explore their interests, gain new skills, and advance their careers.'
        },
        {
            img: 'https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg',
            h1: 'Get rewarded',
            p: 'Expand your professional network, build your expertise, and earn money on each paid enrollment.'
        },
    ]


    return (
        <div>
            <div className="min-w-full relative">
                <img src='https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg' className="h-[500px] object-cover" />
                <div className="absolute top-20 left-32 bg-white p-6 rounded-lg shadow-lg w-96">
                    <h1 className="text-3xl font-semibold text-gray-800">Come teach with us</h1>
                    <p className="text-gray-600">Become an instructor and change lives — including your own</p>
                    <button className='bg-gray-800 text-white font-semibold px-10 py-2 rounded mt-5'>Get started</button>
                </div>
            </div>


            <div className="py-16">
                <h2 className="text-center text-4xl font-bold mb-12">
                    So many reasons to start
                </h2>
                <div className="flex flex-wrap justify-center gap-8 px-4">
                    {
                        techOn.map((val) => {
                            return (
                                <div
                                    className="bg-white rounded-lg max-w-sm p-6 flex flex-col justify-center items-center"
                                >
                                    <img src={val.img} alt="img..." className='' />
                                    <h1 className="text-gray-900 font-bold italic mb-4">{val.h1}</h1>
                                    <p className="text-sm text-center">{val.p}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <TechOnSlide />
        </div>
    )
}

export default TechOnPage
