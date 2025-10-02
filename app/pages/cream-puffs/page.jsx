"use client";

import { NavBarScrollRouted } from "@/app/_components/Navbar";
import { ReactLenis } from "lenis/react";
import Info from "@/app/sections/Info";
import Image from "next/image";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const page = () => {
    const slides = ["/puff_coco.jpg", "/puff_matcha.jpg", "/puff_og.jpg"];

    return (
        <ReactLenis root>
            <div className=" flex flex-col">
                <NavBarScrollRouted />
                <div className="w-full flex md:flex-row flex-col gap-8 px-8">
                    <div className="flex md:max-w-[700px] md:h-[780px] h-[500px] w-full py-8 px-4">
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 5000,
                                }),
                            ]}
                            className="md:w-[500px] w-[300px]"
                        >
                            <CarouselContent>
                                {slides.map((slide, index) => (
                                    <CarouselItem key={index}>
                                        <div className="flex items-center justify-center">
                                            <div
                                                className="md:w-[500px] w-[300px] md:h-[780px] h-[500px] rounded-2xl bg-center bg-cover"
                                                style={{
                                                    backgroundImage: `url(${slide})`,
                                                }}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-5 bg-black/20 text-white border-none hover:bg-black/40" />
                            <CarouselNext className="right-5 bg-black/20 text-white border-none hover:bg-black/40" />
                        </Carousel>
                    </div>
                    <div className="flex flex-col md:py-48 text-walnut w-full">
                        <h4 className="font-Corn text-6xl font-semibold tracking-tighter">
                            Cream Puffs
                        </h4>
                        <br />
                        <div className="flex flex-col">
                            <p className="font-Open tracking-tighter w-full md:max-w-full text-xl">
                                Light French cream puff with crunchy top filled
                                with diplomat cream
                            </p>
                            <p>Size: 1 3/4 inch diameter</p>
                        </div>
                        <br />
                        <br />
                        <p className="font-Open text-3xl font-semibold">$33</p>
                        <div className="flex md:justify-end justify-center mt-10 relative">
                            <div className="">
                                <Image
                                    src={"/Bake_Whisperer.png"}
                                    width={200}
                                    height={200}
                                    alt="circle_text"
                                    className="animate-spin-slow"
                                />
                            </div>
                            <div className="bw-only absolute md:-translate-x-[53px] md:translate-y-[75px] translate-y-[75px] w-24 h-24 rounded-full bg-walnut" />
                        </div>
                    </div>
                </div>
                <Info />
            </div>
        </ReactLenis>
    );
};

export default page;
