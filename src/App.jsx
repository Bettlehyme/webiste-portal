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
function App() {


  return (
    <div className="flex min-h-screen w-full flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          <Routes>
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

          </Routes>
        </main>
      </BrowserRouter>
    </div>


  )
}

export default App
