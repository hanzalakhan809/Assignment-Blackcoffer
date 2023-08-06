import React from 'react'
import Dashboard from './components/Dashboard'
import NavBar from './components/Navbar'
import MenuBar from './components/MenuBar'
import { useState,useCallback } from "react";

export default function App() {
  const [open, setOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);


  const memoizedSetOpen = useCallback(
    (value) => setOpen(value),
    [] // dependencies of this callback
  );

  return (
    <div className='w-full  flex flex-col'>
      <NavBar/>  
      <div className='flex w-full  '>
        <MenuBar open={open} setOpen={memoizedSetOpen} scrolled={scrolled} />
        <Dashboard  open={open} setOpen={memoizedSetOpen}/>
      </div>
    </div>
  )
}
