import { useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/component/Navbar'
import Home from './pages/home/Home'
import OurTeams from './pages/about/OutTeams'
import VMHistory from './pages/about/VMHistory'
import './index.css'
import Building from './pages/facilities/Building'
import SFOTC from './pages/facilities/SFOTC'
import TC from './pages/facilities/TC'
import OurTraining from './pages/training-program/OurTraining'
import TrainingCalendar from './pages/training-program/TrainingCalendar'
import EventGallery from './pages/event-gallery/EventGallery'
import Library from './pages/other-apps/Library'
import DLP from './pages/other-apps/DLP'
import Contact from './pages/contact/Contact'
import AdminLayout from './pages/admin/AdminLayout'
import MainLayout from './pages/MainLayout'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Posts from './pages/admin/dashboard/Posts'
import { Login } from './pages/admin/login/Login'
import Events from './pages/admin/dashboard/Events'
import Trainings from './pages/admin/dashboard/Trainings'
import Facilities from './pages/admin/dashboard/Facilities'

function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<MainLayout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about/our-teams' element={<OurTeams />} />
          <Route path='/about/vision-mission-history' element={<VMHistory />} />
          <Route path='/facilities/building' element={<Building />} />
          <Route path='/facilities/sfotc' element={<SFOTC />} />
          <Route path='/facilities/tc-ptsi' element={<TC />} />
          <Route path='/training-program/our-training-program' element={<OurTraining />} />
          <Route path='/training-program/training-calendar' element={<TrainingCalendar />} />
          <Route path='/event-gallery' element={<EventGallery />} />
          <Route path='/other-apps/library' element={<Library />} />
          <Route path='/other-apps/dlp' element={<DLP />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

    


        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/posts" element={<Posts />} />
          <Route path="/admin/events" element={<Events />} />
          <Route path="/admin/trainings" element={<Trainings />} />
          <Route path="/admin/facilities" element={<Facilities />} />

          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>



  )
}

export default App
