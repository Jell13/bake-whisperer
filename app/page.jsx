"use client"

import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Loader from "./components/Loader";
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ReactLenis, useLenis } from 'lenis/react'
import Shop from "./sections/Shop";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function Home() {

  const [loading, setLoading] = useState(true)
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
              <Contact/>
            </div>
          </ReactLenis>
        )}
        </LayoutGroup>
      </AnimatePresence>
    </>
  );
}
