import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import UserHome from './Component/Home/UserHome';
import Login from './Component/Authorization/Login';
import SignUp from './Component/Authorization/SignUp';
import NavBar from './Component/Header/NavBar';
import Footer from './Component/Footer/Footer';
import ForgetPassword from './Component/Authorization/ForgetPassword';
import UdemyBusiness from './Component/Pages/UdemyBusiness';
import CreateCourse from './Component/Admin_workSection/CourseCreation/CreateCourse';
import Include_All_Course from './Component/SkiilsSection/AllCourseDetails/Include_All_Course';
import AddToCart from './Component/SkiilsSection/AddToCart';
import PricingSubscraption from './Component/Pages/PricingSubscraption';
import TechOnPage from './Component/Pages/TechOnPage';
import Chatbot from './Component/Pages/Chatbot';
import PaymentSuccess from './Component/Pages/PaymentSuccess';
import PaymentCancel from './Component/Pages/PaymentCancel';
import AdminHome from './Component/Home/AdminHome';
import FindAlluser from './Component/Admin_workSection/FindAlluser';
import Skills from './Component/SkiilsSection/Skills';
import Allcourses from './Component/Pages/Allcourses';
import EditProfile from './Component/Pages/EditProfile';
import FileUpload from './Component/temp00000000000/FileUpload';
import PendingCourses from './Component/Admin_workSection/PendingCourses';
import SavedData from './Component/Pages/SavedData';
import AllCourcesByAdmin from './Component/Admin_workSection/AllCourcesByAdmin';
import UpdateCourse from './Component/Admin_workSection/UpdateCourse';
import AdminLayout from './Component/Home/AdminLayout';

function App() {
  const userRole = localStorage.getItem('E-role');
  const token = localStorage.getItem('token');

  return (
    <div className='relative'>
      <AdminLayout>

        {
          userRole === 'user' &&
          <NavBar />
        }
        <Routes>
          {userRole === 'user' ? (
            <Route path='/' element={<UserHome />} />
          ) : (
            <Route path='/' element={<AdminHome />} />
          )}

          {
            !token &&
            <Route path='/login' element={<Login />} />
          }

          {
            !token &&
            <Route path='/signup' element={<SignUp />} />
          }


          <Route path='/api/reset-password/:token' element={<ForgetPassword />} />
          <Route path='/e-business' element={<UdemyBusiness />} />
          <Route path='/PricingSubscraption' element={<PricingSubscraption />} />
          <Route path='/tech-on-page' element={<TechOnPage />} />
          <Route path='/course-detail/:id' element={<Include_All_Course />} />
          <Route path='/add-cart' element={<AddToCart />} />
          <Route path='/uploade' element={<FileUpload />} />
          <Route path='/create-course' element={<CreateCourse />} />
          <Route path='/find-user' element={<FindAlluser />} />
          <Route path='/PaymentSuccess' element={<PaymentSuccess />} />
          <Route path='/PaymentCancel' element={<PaymentCancel />} />
          <Route path='/category' element={<Skills />} />
          <Route path='/all-courses' element={<Allcourses />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/pending-cources' element={<PendingCourses />} />
          <Route path='/save-cources' element={<SavedData />} />
          <Route path='/admin/all-cources' element={<AllCourcesByAdmin />} />
          <Route path='/update-course/:id' element={<UpdateCourse />} />
        </Routes>

        {userRole === 'user' && (
          <div className="fixed bottom-4 right-4">
            <Chatbot />
          </div>
        )}

        {/* Fixed Chatbot */}
        {/* <div className="fixed bottom-4 right-4">
        <Chatbot />
      </div> */}

        {userRole === 'user' && (
          <Footer />
        )
        }
      </AdminLayout>

    </div >
  )
}

export default App
