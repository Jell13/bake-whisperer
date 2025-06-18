"use client"

import Hero from "./sections/Hero";
import Navbar from "./_components/Navbar";
import { useEffect, useState } from "react";
import Loader from "./_components/Loader";
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ReactLenis, useLenis } from 'lenis/react'
import Shop from "./sections/Shop";
import About from "./sections/About";
import Info from "./sections/Info";
import { v4 as uuidv4 } from 'uuid';
import GSAPLoader from "./_components/Loader";

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    setMounted(true);
    const storeUid = localStorage.getItem("userUid")

    if (!storeUid){
      const newId = uuidv4()
      localStorage.setItem("userUid", newId)
    }

    console.log(localStorage.getItem("userUid"))
  }, []);

  if (!mounted) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#DDD1C5',
        zIndex: 9999
      }} />
    );
  }
  
  return (
    <>
      {/* {loading ? (
        <GSAPLoader setLoading={setLoading} />
      ) : ( */}
        <ReactLenis root>
          {loading && <GSAPLoader setLoading={setLoading}/>}
          <div style={{
            visibility: loading ? 'hidden' : 'visible',
            opacity: loading ? 0 : 1,
            position: 'relative',
            zIndex: 1
          }}>
            <Navbar startAnimation={!loading}/>
            <Hero startAnimation={!loading}/>
            <Shop />
            <About />
            <Info />
          </div>
        </ReactLenis>
      {/* )} */}
    </>
  );
}
