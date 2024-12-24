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
import CreateCourse from './Component/Admin_workSection/CourseCreation/CreateCourse'
import Include_All_Course from './Component/SkiilsSection/AllCourseDetails/Include_All_Course'
import AddToCart from './Component/SkiilsSection/AddToCart'
import PricingSubscraption from './Component/Pages/PricingSubscraption'
import TechOnPage from './Component/Pages/TechOnPage'
import Chatbot from './Component/Pages/Chatbot'
import PaymentSuccess from './Component/Pages/PaymentSuccess'
import PaymentCancel from './Component/Pages/PaymentCancel'
import FileUpload from './Component/temp00000000000/FileUpload'


function App() {

  return (
    <div className='relative'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/api/reset-password/:token' element={<ForgetPassword />} />
        <Route path='/e-business' element={<UdemyBusiness />} />
        <Route path='/PricingSubscraption' element={<PricingSubscraption />} />
        <Route path='/tech-on-page' element={<TechOnPage />} />
        {/* All Course details */}
        <Route path='/course-detail/:id' element={<Include_All_Course />} />
        <Route path='/add-cart' element={<AddToCart />} />
        <Route path='/PaymentSuccess' element={<PaymentSuccess />} />
        <Route path='/PaymentCancel' element={<PaymentCancel />} />




        <Route path='/uploade' element={<FileUpload />} />


        {/* Create a course
            Admin Page
         */}
        <Route path='/create-course' element={<CreateCourse />} />

      </Routes>
      {/* Fixed Chatbot */}
      <div className="fixed bottom-4 right-4">
        <Chatbot />
      </div>
      <Footer />
    </div>
  )
}

export default App
