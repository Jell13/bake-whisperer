"use client";

import React, { useRef } from "react";
import DisplayBox from "../_components/DisplayBox";
import { motion, useScroll, useTransform } from "motion/react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import Link from "next/link";

const Shop = () => {
    const menu = useQuery(api.menu.getMenu);

    const shopRef = useRef(null);

    const distributeItems = (items) => {
        if (!items || items.length === 0) return [[], [], []];

        const col1 = [];
        const col2 = [];
        const col3 = [];

        items.forEach((item, index) => {
            if (index % 3 === 0) {
                col1.push(item);
            } else if (index % 3 === 1) {
                col2.push(item);
            } else {
                col3.push(item);
            }
        });

        return [col1, col2, col3];
    };

    // Transform menu data to match DisplayBox format
    const transformMenuItem = (item) => ({
        name: item.name,
        desc: item.desc,
        ingredients: item.ingredients || [],
        images: item.frontImage || "",
        price: [`$${item.price}`],
        path: `/${item._id}`,
    });

    if (!menu) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <Image
                    src={"/Bake_Whisperer.png"}
                    width={200}
                    height={200}
                    alt="circle_text"
                    className="animate-spin-slow"
                />
            </div>
        );
    }

    const [col1Items, col2Items, col3Items] = distributeItems(menu);

    return (
        // <motion.div
        //     id="shop"
        //     ref={shopRef}
        //     className="md:pt-32 md:px-8 px-4 text-secondary"
        // >
        //     {/* Desktop View */}
        //     <div className="md:grid hidden grid-cols-3 gap-x-6 pt-32 md:mb-48">
        //         <motion.div
        //             style={{ y: col1Y }}
        //             className="col-start-1 col-span-1 flex flex-col gap-6 translate-y-12"
        //         >
        //             {col1Items.map((item, index) => (
        //                 <DisplayBox
        //                     key={item._id || index}
        //                     details={transformMenuItem(item)}
        //                 />
        //             ))}
        //         </motion.div>

        //         <motion.div
        //             style={{ y: col2Y }}
        //             className="col-start-2 col-span-1 flex flex-col gap-6 translate-y-48"
        //         >
        //             <h3 className="-translate-y-24 font-Corn text-walnut text-5xl font-semibold">
        //                 OUR <span>FRESH</span> BAKED PRODUCTS
        //             </h3>
        //             {col2Items.map((item, index) => (
        //                 <DisplayBox
        //                     key={item._id || index}
        //                     details={transformMenuItem(item)}
        //                 />
        //             ))}
        //         </motion.div>

        //         <motion.div
        //             style={{ y: col3Y }}
        //             className="col-start-3 col-span-1 flex flex-col gap-6 translate-y-12"
        //         >
        //             {col3Items.map((item, index) => (
        //                 <DisplayBox
        //                     key={item._id || index}
        //                     details={transformMenuItem(item)}
        //                 />
        //             ))}
        //         </motion.div>
        //     </div>

        //     {/* Mobile View */}
        //     <div className="md:hidden flex flex-col gap-y-6 md:pt-32 pt-12">
        //         <motion.div className="flex flex-col gap-6">
        //             <h3 className="font-Corn text-walnut text-4xl font-semibold">
        //                 OUR <span>FRESH</span> BAKED PRODUCTS
        //             </h3>
        //             {menu.map((item, index) => (
        //                 <DisplayBox
        //                     key={item._id || index}
        //                     details={transformMenuItem(item)}
        //                 />
        //             ))}
        //         </motion.div>
        //     </div>
        // </motion.div>

        <div id="shop" className="min-h-screen md:px-12 px-6 py-20">
            {/* Minimal Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto mb-20 text-center"
            >
                <h1 className="font-Corn text-6xl md:text-8xl font-semibold text-walnut mb-6">
                    OUR BAKED <span className="text-[#c69c6d]">GOODS</span>
                </h1>
                <div className="w-24 h-0.5 bg-[#c69c6d] mx-auto" />
            </motion.div>

            {/* Masonry-style Grid */}
            <div className="max-w-7xl mx-auto">
                {/* Desktop: 3 columns */}
                <div className="hidden md:grid md:grid-cols-3 gap-x-8 gap-y-16">
                    {menu.map((item, index) => (
                        <DisplayBox
                            key={item._id || index}
                            details={transformMenuItem(item)}
                        />
                    ))}
                </div>

                {/* Mobile: 1 column */}
                <div className="md:hidden grid grid-cols-1 gap-y-12">
                    {menu.map((item, index) => (
                        <DisplayBox
                            key={item._id || index}
                            details={transformMenuItem(item)}
                        />
                    ))}
                </div>
            </div>

            {/* Simple Footer CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center mt-32 pt-16 border-t border-walnut"
            >
                <p className="text-walnut/70 text-lg mb-8 font-Open">
                    All items are baked fresh daily with locally sourced ingredients
                </p>
                <Link
                    href="/online-order"
                    className="inline-block px-10 py-4 bg-walnut text-soft font-Open font-medium rounded-full hover:bg-[#c69c6d] transition-colors duration-300"
                >
                    Place Custom Order
                </Link>
            </motion.div>
        </div>
    );
};

export default Shop;
