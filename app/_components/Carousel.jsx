"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const slides = [
  "/blueberry.jpg",
  "/brown.jpg",
  "/cheese.jpg"
];

export const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const AUTO_SLIDE_DELAY = 5000; // 5 seconds

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, AUTO_SLIDE_DELAY);

      return () => clearInterval(interval);
    }, [currentIndex]);
      
    return (
        <div className='md:max-w-[700px] md:h-[780px] h-[500px] flex flex-col items-center w-full m-auto md:py-16 py-8 px-4 relative group'>
        <motion.div
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
            initial={{ opacity: 0, scale: 1.1 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Animate to this state
            transition={{ duration: 0.5 }} // Animation duration
            className='md:w-[500px] w-[300px] h-full rounded-2xl bg-center bg-cover duration-500'
        />
        {/* Left Arrow */}
        <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] hover:scale-90 duration-300 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] hover:scale-90 duration-300 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center mt-3'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={slideIndex === currentIndex ? "text-walnut border-[1px] border-walnut p-0 rounded-xl" : "text-gray-500"}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    );
  };