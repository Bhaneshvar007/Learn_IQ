import React from 'react'
import Header_Course from './Header_Course'
import Pricing from './Pricing'
import CourseIncludes from './CourseIncludes'
import CourseContent from './CourseContent'
import ReviewsPage from './ReviewsPage'
import InstructorsPage from './InstructorsPage'

const Include_All_Course = () => {
    return (
        <div>
            <Header_Course />
            <CourseIncludes />
            <CourseContent />
            <InstructorsPage />
            <ReviewsPage />
        </div>
    )
}

export default Include_All_Course
