import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter  as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const[progress,setProgress]=useState(0);
  return (
    <>
    <Router>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
       <Routes>
          <Route eaxct path='/' element={< News setProgress={setProgress}  key="general" pageSize={6} country="in" category="general"/>}/>
          <Route eaxct path='/Business' element={< News setProgress={setProgress}  key="business" pageSize={6} country="in" category="business"/>}/>
          <Route eaxct path='/Entertainment' element={< News setProgress={setProgress}  key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
          <Route eaxct path='/Health' element={< News setProgress={setProgress}  key="health"  pageSize={6} country="in" category="health"/>}/>
          <Route eaxct path='/Science' element={< News setProgress={setProgress}  key="science" pageSize={6} country="in" category="science"/>}/>
          <Route eaxct path='/Sports' element={< News setProgress={setProgress}  key="sports" pageSize={6} country="in" category="sports"/>}/>
          <Route eaxct path='/Technology' element={< News setProgress={setProgress}  key="technology" pageSize={6} country="in" category="technology"/>}/>
       </Routes>
      </Router>
    </>
  )
}
