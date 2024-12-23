import React from 'react'
import HomeSlide from '../Img_Slider/HomeSlide'
import Skills from '../SkiilsSection/Skills'
import Centralization from '../Pages/Centralization'
import Subs from '../Pages/Subs'
import Allcourses from '../Pages/Allcourses'
import FeatureOf_Work from '../Pages/FeatureOf_Work'

const Home = () => {
    return (
        <div>
            <HomeSlide />
            <Skills />
            <Centralization />
            <Subs />
            <Allcourses />
            <FeatureOf_Work />
        </div>
    )
}

export default Home
