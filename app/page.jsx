"use client"

import Hero from "./sections/Hero";
import Navbar from "./_components/Navbar";
import { useState } from "react";
import Loader from "./_components/Loader";
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ReactLenis, useLenis } from 'lenis/react'
import Shop from "./sections/Shop";
import About from "./sections/About";
import Info from "./sections/Info";
import Special from "./sections/Special";

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
              {/* <Special/> */}
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
