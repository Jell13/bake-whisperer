"use client";

import CartDisplayBox from "@/app/_components/CartDisplayBox";
import Link from "next/link";
import { ReactLenis } from "lenis/react";
import React from "react";
import { NavBarScrollCart } from "@/app/_components/Navbar";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const formatTypeName = (type) => {
    return type.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

const page = () => {
    const menu = useQuery(api.menu.getMenu);
    // const groupedMenu = groupByType(menuInfo);
    console.log(menu);

    if (!menu) {
        return (
            <div className="md:pt-32 md:px-8 px-4 text-secondary flex items-center justify-center min-h-screen">
                <p className="text-xl text-gray-500">Loading menu...</p>
            </div>
        );
    }

    const types = [...new Set(menu.map((item) => item.type))];
    console.log(types);

    return (
        <ReactLenis root>
            <section className="flex flex-col text-softer py-6">
                <NavBarScrollCart />
                <nav className="flex items-center justify-between md:px-8 px-6 bg-soft">
                    <div className="flex gap-4 items-center">
                        <Link href={"/"}>
                            <div className="flex items-center p-2 py-1 border-[1px] text-[1rem] border-walnut text-walnut font-Open rounded-xl hover:bg-walnut hover:text-beige duration-300">
                                <HiOutlineChevronLeft />
                                <p>Back</p>
                            </div>
                        </Link>
                        <h2 className="font-Corn md:text-[3rem] text-[2rem] font-semibold text-walnut tracking-tighter">
                            Online Ordering
                        </h2>
                    </div>
                </nav>
                <div className="flex md:px-12 px-6 justify-between gap-4 mt-7 md:mt-0">
                    <div className="flex flex-col w-full">
                        {types.map((type, index) => (
                            <div
                                key={type}
                                className={index > 0 ? "mt-10" : ""}
                            >
                                <h3 className="font-Corn text-walnut md:text-[2.5rem] text-[2rem] font-semibold tracking-tighter">
                                    {formatTypeName(type)}
                                </h3>
                                <div className="grid md:grid-cols-3 grid-cols-2 w-full mt-5 gap-4">
                                    {menu
                                        .filter((item) => item.type === type)
                                        .map((item) => (
                                            <div
                                                key={item.id}
                                                className="col-span-1"
                                            >
                                                <CartDisplayBox item={item} />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}

                        {menu.length === 0 && (
                            <p className="text-walnut font-Open text-lg text-center mt-10">
                                No menu items available at the moment.
                            </p>
                        )}
                    </div>
                    <div className="w-1/2 md:flex hidden">&nbsp;</div>
                </div>
            </section>
        </ReactLenis>
    );
};

export default page;
