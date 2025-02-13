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
import Special from "./sections/Special";

export default function Home() {

  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const isPageRefreshed = performance.navigation.type === 1; // 1 means the page was reloaded

  //   // Check session storage to see if the animation has already been played
  //   const hasAnimationPlayed = sessionStorage.getItem("animationPlayed");

  //   if (hasAnimationPlayed && !isPageRefreshed) {
  //     // If the animation has already played and the page wasn't refreshed, skip it
  //     setLoading(false);
  //   } else {
  //     // If the animation hasn't played yet or the page was refreshed, mark it as played
  //     sessionStorage.setItem("animationPlayed", "true");
  //   }
  // }, []);
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
