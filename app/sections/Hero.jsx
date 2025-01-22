"use client"

import React from 'react'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <div className='bg-hero w-screen h-screen px-12'>
      <div className='w-full h-full flex flex-col justify-end items-center relative'>
        <svg 
        className='absolute w-[550px] lg:bottom-9 lg:left-[370px]'
        viewBox="0 0 463 448" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
          initial={{pathLength: 0}}
          whileInView={{pathLength: 1}}
          transition={{
            duration: 2.25,
            ease: "easeInOut"
          }}
          strokeWidth="3" d="M2.5 215C12.2223 171.359 20.0611 149.668 37.5 115C55.3356 88.1334 66.3056 74.93 87.5 54.5C111.791 34.9429 125.957 26.3377 152.5 16.5C178.617 7.4978 192.771 4.41609 217 3C243.751 2.6566 258.371 4.14395 283.5 11C305.84 18.5953 317.961 23.5774 339 33.5C350.366 40.8585 358.407 46.4767 366.5 53.5016M378.133 64.5C379.387 65.7731 380.672 67.1035 382 68.5C396.545 85.0872 403.85 94.3101 414 110.5C425.768 134.893 430.574 147.228 433.5 165C437.887 178.048 439.373 186.216 439.5 203C439.681 231.2 438.479 245.053 433.5 265.5C432.142 279.403 429.181 290.289 418 318C413.171 329.667 406.783 339.574 388 364C378.86 377.006 367.52 385.773 338.5 403.5C325.433 412.162 311.383 417.08 270 426C252.949 428.012 242.762 429.037 195 426C176.344 422.661 165.266 420.212 136 407C122.945 400.765 112.333 393.189 86 370.5C78.9813 364.521 74.124 358.932 63 343C58.8255 335.97 56.0977 330.688 50 317C45.6917 307.224 43.0603 300.081 38 284.5C34.9059 272.626 33.4745 264.849 32 247C33.8069 215.708 35.7099 201.017 41.5 182.5C47.0599 162.481 51.5992 149.84 63.5 123.5C73.602 107.18 81.795 96.8387 101.5 76C112.032 65.3663 121.229 58.3651 142 44.5C157.614 35.289 170.71 30.1455 201.5 21C221.836 15.5553 239.066 16.0701 269 16.5C285.915 17.984 298.906 21.2409 328.5 31.5C351.674 41.583 362.519 48.8247 378.133 64.5ZM378.133 64.5C374.02 60.3217 370.254 56.7603 366.5 53.5016M366.5 53.5016C387.651 65.8046 396.418 72.828 408.5 85.5C417.64 95.3589 424.272 104.411 439.5 128.5C448.517 143.808 452.464 156.327 458 184C460.735 204.979 460.874 220.025 458 253.5C454.363 273.66 451.154 287.175 439.5 322.5C432.878 338.524 429.156 347.516 404.5 378C394.222 391.069 384.806 399.42 349.5 419.5C329.148 429.727 313.868 434.761 277 442C254.377 445.132 238.139 445.704 195 442C174.181 438.826 162.074 435.721 136 416.5C118.335 402.281 108.422 395.152 91 358C84.623 344.733 80.9815 336.762 72 302.5C69.7684 290.838 68.6151 280.785 67 247" stroke="#773F1A"/>
        </svg>



        {/* <h1 className='mb-1 font-EB font-semibold text-[6rem] text-walnut'>Sweet Haven</h1> */}
      </div>
    </div>
  )
}

export default Hero
