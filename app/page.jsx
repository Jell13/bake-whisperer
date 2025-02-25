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

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storeUid = localStorage.getItem("userUid")

    if (!storeUid){
      const newId = uuidv4()
      localStorage.setItem("userUid", newId)
    }

    console.log(localStorage.getItem("userUid"))
  }, []);
  return (
    <>
      <AnimatePresence>
        <LayoutGroup>
        {loading ? (
          <motion.div>
            <Loader setLoading={setLoading}/>
          </motion.div>
        ): (
          <ReactLenis root>
            <div>
              <Navbar/>
              <Hero/>
              <Shop/>
              <About/>
              <Info/>
            </div>
          </ReactLenis>
        )}
        </LayoutGroup>
      </AnimatePresence>
    </>
  );
}
