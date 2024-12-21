import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import Login from './Component/Authorization/Login'
import SignUp from './Component/Authorization/SignUp'
import NavBar from './Component/Header/NavBar'
import Footer from './Component/Footer/Footer'
import ForgetPassword from './Component/Authorization/ForgetPassword'
import UdemyBusiness from './Component/Pages/UdemyBusiness'
import CreateCourse from './Component/Pages/CourseCreation/CreateCourse'
import Include_All_Course from './Component/SkiilsSection/AllCourseDetails/Include_All_Course'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/api/reset-password/:token' element={<ForgetPassword />} />
        <Route path='/e-business' element={<UdemyBusiness />} />

        {/* Create a cprse */}
        <Route path='/create-course' element={<CreateCourse />} />


        {/* All Course details */}
        <Route path='/course-detail' element={<Include_All_Course />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
