import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import SelectLanguage from './pages/SelectLanguage'
import Login from './pages/Login'
import Location from './pages/Location'
import WhereYou from './pages/WhereYou'
import PhoneNumber from './pages/PhoneNumber'
import OTPverification from './pages/OTPvarication'
import PersonalDetails from './pages/PersonalDetails'
import Profile from './pages/Profile'
import Profile2 from './pages/Profile2'
import LocationMap from './pages/LocationMap'
import EnterOtp from './pages/EnterOtp'
import YojanaCard from './pages/YojanaCard'
import { MyProvider } from './components/ContextApi'




const App = () => {
  return (
    <MyProvider className=' w-full h-screen'>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home2' element={<Home2/>}/>
        <Route path='/select-language' element={<SelectLanguage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/where-are-you' element={<WhereYou/>}/>
        <Route path='/phone-number' element={<PhoneNumber/>}/>
        <Route path='/otp-verification' element={<OTPverification/>}/>
        <Route path='/personal-details' element={<PersonalDetails/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile-two' element={<Profile2/>}/>
        <Route path='/location-with-map' element={<LocationMap/>}/>
        <Route path='/enter-otp' element={<EnterOtp/>}/>
        <Route path='/yojana-card' element={<YojanaCard/>}/>
      </Routes>
      </BrowserRouter>
    </MyProvider>
  )
}

export default App