"use client";

import Navbar, { NavBarScrollRouted } from "@/app/_components/Navbar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Sparkles, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ReactLenis } from "lenis/react";

const page = () => {
    const galleryImages = [
        {
            src: "event2.webp",
            featured: true,
        },
        {
            src: "event3.webp",
        },
        {
            src: "event4.webp",
        },
        {
            src: "event5.webp",
        },
    ];
    return (
        <ReactLenis root>
            <div className="min-h-screen w-full flex flex-col gap-20">
                <div
                    className="w-full h-[80vh] flex flex-col"
                    style={{
                        backgroundImage: `linear-gradient(rgba(246,242,233,0.7), rgba(246,242,233,0.7)), url('/event-hero.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundColor: "#DDD1C5",
                    }}
                >
                    <NavBarScrollRouted />
                    {/* Header */}
                    <div className="w-full h-full flex flex-col gap-5 justify-center items-center px-20">
                        <h1 className="text-6xl font-Corn font-bold text-walnut">
                            We love celebrations!
                        </h1>
                        <p className="text-2xl font-Open font-semibold text-walnut text-center">
                            Let us create something extraordinary for your
                            special occasion. From intimate gatherings to grand
                            celebrations, we bring your sweet dreams to life.
                        </p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="flex flex-col gap-10 w-full h-full md:px-8 px-6 items-center ">
                    <div className="flex gap-4 items-center">
                        <Sparkles className="w-6 h-6 text-walnut" />
                        <h2 className="text-walnut text-3xl font-medium font-">
                            A glimpse into the beautiful moments we've helped
                            create
                        </h2>
                        <Sparkles className="w-6 h-6 text-walnut" />
                    </div>

                    {/* Pictures */}
                    <Card className="border-2 border-soft shadow-2xl backdrop-blur-sm bg-card/95 w-full">
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {galleryImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:shadow-2xl h-[300px] w-full"
                                    >
                                        <Image
                                            src={`/${image.src}`}
                                            alt="Event gallery"
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col gap-10 md:px-8">
                    <Card className="border-2 border-soft shadow-2xl">
                        <CardHeader className="text-center space-y-4 pb-8">
                            <CardTitle className="font-Corn text-4xl md:text-5xl text-walnut">
                                Plan Your Event
                            </CardTitle>
                            <CardDescription className="font-Open text-lg text-muted-foreground">
                                Share your vision with us and let's create
                                something extraordinary together
                            </CardDescription>
                            <div className="w-24 h-0.5 bg-beige mx-auto"></div>
                        </CardHeader>
                        <CardContent>
                            {/* <form onSubmit={handleSubmit}  */}
                            {/* className="space-y-8"> */}
                            {/* Contact Information */}
                            <div className="space-y-6">
                                <h3 className="font-Corn text-2xl text-walnut font-semibold flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Contact Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="name"
                                            className="font-Open text-foreground flex items-center gap-2"
                                        >
                                            <User className="w-4 h-4" />
                                            Full Name *
                                        </Label>
                                        <Input
                                            id="name"
                                            required
                                            // value={formData.name}
                                            // onChange={(e) =>
                                            //     handleChange(
                                            //         "name",
                                            //         e.target.value
                                            //     )
                                            // }
                                            className="border-2 border-soft focus:border-walnut focus:ring-walnut transition-all"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="email"
                                            className="font-Open text-foreground flex items-center gap-2"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Email Address *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            // value={formData.email}
                                            // onChange={(e) =>
                                            //     handleChange(
                                            //         "email",
                                            //         e.target.value
                                            //     )
                                            // }
                                            className="border-2 border-soft focus:border-walnut focus:ring-walnut transition-all"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="phone"
                                        className="font-Open text-foreground flex items-center gap-2"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Phone Number *
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        required
                                        // value={formData.phone}
                                        // onChange={(e) =>
                                        //     handleChange(
                                        //         "phone",
                                        //         e.target.value
                                        //     )
                                        // }
                                        className="border-2 border-soft focus:border-walnut focus:ring-walnut transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            {/* <div className="border-t border-soft pt-8"></div> */}

                            {/* Event Details */}
                            {/* <div className="space-y-6">
                                <h3 className="font-Corn text-2xl text-walnut font-semibold flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Event Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="eventType"
                                            className="font-Open text-foreground"
                                        >
                                            Event Type *
                                        </Label>
                                        <Select
                                            value={formData.eventType}
                                            onValueChange={(value) =>
                                                handleChange("eventType", value)
                                            }
                                        >
                                            <SelectTrigger className="border-2 border-soft focus:border-walnut focus:ring-walnut">
                                                <SelectValue placeholder="Select event type" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-card border-2 border-soft">
                                                <SelectItem value="baby-shower">
                                                    Baby Shower
                                                </SelectItem>
                                                <SelectItem value="birthday">
                                                    Birthday
                                                </SelectItem>
                                                <SelectItem value="wedding">
                                                    Wedding
                                                </SelectItem>
                                                <SelectItem value="corporate">
                                                    Corporate Event
                                                </SelectItem>
                                                <SelectItem value="bridal-shower">
                                                    Bridal Shower
                                                </SelectItem>
                                                <SelectItem value="anniversary">
                                                    Anniversary
                                                </SelectItem>
                                                <SelectItem value="graduation">
                                                    Graduation
                                                </SelectItem>
                                                <SelectItem value="other">
                                                    Other
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="eventDate"
                                            className="font-Open text-foreground"
                                        >
                                            Event Date *
                                        </Label>
                                        <Input
                                            id="eventDate"
                                            type="date"
                                            required
                                            value={formData.eventDate}
                                            onChange={(e) =>
                                                handleChange(
                                                    "eventDate",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 border-soft focus:border-walnut focus:ring-walnut transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="guestCount"
                                            className="font-Open text-foreground flex items-center gap-2"
                                        >
                                            <Users className="w-4 h-4" />
                                            Number of Guests *
                                        </Label>
                                        <Input
                                            id="guestCount"
                                            type="number"
                                            required
                                            value={formData.guestCount}
                                            onChange={(e) =>
                                                handleChange(
                                                    "guestCount",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 border-soft focus:border-walnut focus:ring-walnut transition-all"
                                            placeholder="50"
                                            min="1"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="budget"
                                            className="font-Open text-foreground flex items-center gap-2"
                                        >
                                            <DollarSign className="w-4 h-4" />
                                            Budget Range *
                                        </Label>
                                        <Select
                                            value={formData.budget}
                                            onValueChange={(value) =>
                                                handleChange("budget", value)
                                            }
                                        >
                                            <SelectTrigger className="border-2 border-soft focus:border-walnut focus:ring-walnut">
                                                <SelectValue placeholder="Select budget range" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-card border-2 border-soft">
                                                <SelectItem value="200-400">
                                                    $200 - $400
                                                </SelectItem>
                                                <SelectItem value="400-600">
                                                    $400 - $600
                                                </SelectItem>
                                                <SelectItem value="600-800">
                                                    $600 - $800
                                                </SelectItem>
                                                <SelectItem value="800-1000">
                                                    $800 - $1,000
                                                </SelectItem>
                                                <SelectItem value="1000-1200">
                                                    $1,000 - $1,200
                                                </SelectItem>
                                                <SelectItem value="1200-1400">
                                                    $1,200 - $1,400
                                                </SelectItem>
                                                <SelectItem value="1400-1600">
                                                    $1,400 - $1,600
                                                </SelectItem>
                                                <SelectItem value="1600-1800">
                                                    $1,600 - $1,800
                                                </SelectItem>
                                                <SelectItem value="1800-2000">
                                                    $1,800 - $2,000
                                                </SelectItem>
                                                <SelectItem value="2000+">
                                                    $2,000+
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="border-t border-soft pt-8"></div> */}

                            {/* Dessert Selection */}
                            {/* <div className="space-y-6">
                                <h3 className="font-Corn text-2xl text-walnut font-semibold flex items-center gap-2">
                                    <Cake className="w-5 h-5" />
                                    Dessert Selection
                                </h3>
                                <p className="font-Open text-sm text-muted-foreground">
                                    Select all that interest you (we'll discuss
                                    details later)
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        "Cream Puffs",
                                        "Panna Cotta",
                                        "Cupcakes",
                                        "Cheesecake",
                                        "Macarons",
                                        "Custom Cake",
                                    ].map((dessert) => (
                                        <button
                                            key={dessert}
                                            type="button"
                                            onClick={() =>
                                                handleDessertToggle(dessert)
                                            }
                                            className={`
                          p-4 rounded-lg border-2 transition-all duration-300
                          ${
                              formData.dessertTypes.includes(dessert)
                                  ? "border-walnut bg-beige/20 shadow-md"
                                  : "border-soft hover:border-beige hover:bg-beige/10"
                          }
                        `}
                                        >
                                            <div className="font-Open text-sm font-medium text-foreground">
                                                {dessert}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div> */}

                            {/* <div className="border-t border-soft pt-8"></div> */}

                            {/* Special Requests */}
                            {/* <div className="space-y-4">
                                <Label
                                    htmlFor="specialRequests"
                                    className="font-Corn text-2xl text-walnut font-semibold flex items-center gap-2"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Additional Details
                                </Label>
                                <p className="font-Open text-sm text-muted-foreground">
                                    Tell us about your theme, color preferences,
                                    dietary restrictions, or any special
                                    requests
                                </p>
                                <Textarea
                                    id="specialRequests"
                                    value={formData.specialRequests}
                                    onChange={(e) =>
                                        handleChange(
                                            "specialRequests",
                                            e.target.value
                                        )
                                    }
                                    className="min-h-[150px] border-2 border-soft focus:border-walnut focus:ring-walnut transition-all font-Open"
                                    placeholder="e.g., 'Garden party theme with pastel colors, need gluten-free options for 5 guests, prefer elegant gold accents...'"
                                />
                            </div> */}

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full py-6 bg-walnut hover:bg-walnut/90 text-primary-foreground text-lg font-Corn font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Submit Your Request
                            </Button>
                            {/* </form> */}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ReactLenis>
    );
};

export default page;
