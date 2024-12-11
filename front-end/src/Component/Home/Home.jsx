import React from 'react'
import HomeSlide from '../Img_Slider/HomeSlide'
import Skills from '../SkiilsSection/Skills'
import NavBar from '../Header/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />
            <HomeSlide />
            <Skills />
        </div>
    )
}

export default Home
