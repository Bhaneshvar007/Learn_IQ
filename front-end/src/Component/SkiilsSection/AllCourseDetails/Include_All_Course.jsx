import React from 'react'
import Header_Course from './Header_Course'
import CourseIncludes from './CourseIncludes'
import CourseContent from './CourseContent'
import ReviewsPage from './ReviewsPage'

const Include_All_Course = () => {
    return (
        <div>
            <Header_Course />
            <CourseIncludes />
            <CourseContent />
            <ReviewsPage />
        </div>
    )
}

export default Include_All_Course
