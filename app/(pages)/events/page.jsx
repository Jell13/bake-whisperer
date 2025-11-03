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
import { Calendar, Mail, Phone, Sparkles, User, Users } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import Image from "next/image";
import React, { useState } from "react";
import { ReactLenis } from "lenis/react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const page = () => {
    const addCustom = useMutation(api.custom.createCustom);
    const sendEmail = useAction(api.send.sendEmail);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        deliverType: "",
        payment: "",
    });
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

    const isFormValid = () => {
        return (
            formData.name.trim() !== "" &&
            formData.email.trim() !== "" &&
            formData.phone.trim() !== "" &&
            formData.eventType.trim() !== "" &&
            formData.eventDate !== undefined &&
            formData.guestCount.trim() !== ""
        );
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const clearFormData = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            eventType: "",
            eventDate: "",
            guestCount: "",
            deliverType: "",
            payment: "",
        });
    };

    const handleSubmit = async () => {
        emailjs.init({
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            blockHeadless: true,
        });
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            alert("Please enter a valid email address");
            return;
        }

        const submissionData = {
            ...formData,
            guestCount: formData.guestCount && Number(formData.guestCount),
            eventDate: formData.eventDate ? formData.eventDate.getTime() : null,
        };

        try {
            await addCustom({
                name: submissionData.name,
                email: submissionData.email,
                phone: submissionData.phone,
                eventType: submissionData.eventType,
                date: submissionData.eventDate,
                guestCount: submissionData.guestCount,
                deliverType: submissionData.deliverType,
                payment: submissionData.payment,
            });

            const templateParams = {
                name: `${submissionData.name}`,
                email: `${submissionData.email}`,
                phone: `${submissionData.phone}`,
                eventType: `${submissionData.eventType}`,
                date: `${submissionData.eventDate}`,
                guestCount: `${submissionData.guestCount}`,
                deliverType: `${submissionData.deliverType}`,
                payment: `${submissionData.payment}`
            };

            emailjs
                .send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CUSTOM,
                    templateParams
                )
                .then(
                    (res) => {
                        console.log("success");
                    },
                    (error) => {
                        console.log(error);
                    }
                );

            clearFormData();
            toast.success("Custom order is submitted");
        } catch (err) {
            console.log(err);
        }
    };
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
                        <h1 className="md:text-6xl text-4xl text-center font-Corn font-bold text-walnut">
                            We love celebrations!
                        </h1>
                        <p className="md:text-2xl text-lg font-Open font-semibold text-walnut text-center">
                            Let us create something extraordinary for your
                            special occasion. From intimate gatherings to grand
                            celebrations, we bring your sweet dreams to life.
                        </p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="flex flex-col gap-10 w-full h-full md:px-8 px-6 items-center ">
                    <div className="flex md:gap-4 gap-2 items-center">
                        <Sparkles className="md:w-6 md:h-6 w-0 h-0 text-walnut" />
                        <h2 className="text-walnut md:text-3xl text-xl text-center font-medium font-">
                            A glimpse into the sweet moments we've helped create
                        </h2>
                        <Sparkles className="md:w-6 md:h-6 w-0 h-0 text-walnut" />
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
                            <CardDescription className="font-Open text-lg text-softer">
                                Share your vision with us and let's create
                                something extraordinary together
                            </CardDescription>
                            <div className="w-24 h-0.5 bg-beige mx-auto"></div>
                        </CardHeader>
                        <CardContent className="text-walnut">
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
                                            className="font-Open text-walnut flex items-center gap-2"
                                        >
                                            <User className="w-4 h-4" />
                                            Full Name *
                                        </Label>
                                        <Input
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) =>
                                                handleChange(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            className="border-[2px] border-soft focus:border-walnut transition-all text-walnut"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="email"
                                            className="font-Open text-walnut flex items-center gap-2"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Email Address *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                handleChange(
                                                    "email",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 border-soft focus:border-walnut transition-all text-walnut"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 text-walnut">
                                    <Label
                                        htmlFor="phone"
                                        className="font-Open flex items-center gap-2"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Phone Number *
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) =>
                                            handleChange(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                        className="border-2 border-soft focus:border-walnut transition-all text-walnut"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="border-t border-soft pt-8 mt-10"></div>

                            {/* Event Details */}
                            <div className="space-y-6 text-walnut">
                                <h3 className="font-Corn text-2xl text-walnut font-semibold flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Event Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="eventType"
                                            className="font-Open"
                                        >
                                            Event Type *
                                        </Label>
                                        <Select
                                            value={formData.eventType}
                                            onValueChange={(value) =>
                                                handleChange("eventType", value)
                                            }
                                        >
                                            <SelectTrigger className="border-2 border-soft focus:border-walnut focus:ring-walnut text-walnut">
                                                <SelectValue placeholder="Select event type" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-card border-2 border-soft text-walnut">
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
                                            className="font-Open"
                                        >
                                            Event Date *
                                        </Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className={`w-full justify-start text-left font-normal border-2 border-soft hover:border-walnut focus:border-walnut focus:ring-walnut transition-all ${!formData.eventDate && "text-muted-foreground"}`}
                                                >
                                                    <Calendar className="mr-2 h-4 w-4" />
                                                    {formData.eventDate ? (
                                                        formData.eventDate.toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                            }
                                                        )
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0 bg-card border-2 border-soft"
                                                align="start"
                                            >
                                                <CalendarComponent
                                                    className={"text-walnut"}
                                                    mode="single"
                                                    selected={
                                                        formData.eventDate
                                                    }
                                                    onSelect={(date) =>
                                                        handleChange(
                                                            "eventDate",
                                                            date
                                                        )
                                                    }
                                                    disabled={(date) => {
                                                        const today =
                                                            new Date();
                                                        today.setHours(
                                                            0,
                                                            0,
                                                            0,
                                                            0
                                                        );
                                                        const minDate =
                                                            new Date(today);
                                                        minDate.setDate(
                                                            today.getDate() + 21
                                                        );
                                                        return date < minDate;
                                                    }}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="guestCount"
                                            className="font-Open flex items-center gap-2"
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
                                            htmlFor="deliveryType"
                                            className="font-Open flex items-center gap-2"
                                        >
                                            Receive Method
                                        </Label>
                                        <Select
                                            value={formData.deliverType}
                                            onValueChange={(value) =>
                                                handleChange(
                                                    "deliverType",
                                                    value
                                                )
                                            }
                                            className="text-walnut"
                                        >
                                            <SelectTrigger className="border-2 border-soft focus:border-walnut focus:ring-walnut">
                                                <SelectValue placeholder="Select Delivery method" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-card border-2 border-soft text-walnut">
                                                <SelectItem value="pick-up">
                                                    Pick up
                                                </SelectItem>
                                                <SelectItem value="deliver">
                                                    Deliver
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="paymentMethod"
                                            className="font-Open flex items-center gap-2"
                                        >
                                            Payment Method
                                        </Label>
                                        <Select
                                            value={formData.payment}
                                            onValueChange={(value) =>
                                                handleChange("payment", value)
                                            }
                                        >
                                            <SelectTrigger className="border-2 border-soft focus:border-walnut focus:ring-walnut">
                                                <SelectValue placeholder="Select event type" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-card border-2 border-soft text-walnut">
                                                <SelectItem value="Venmo">
                                                    Venmo
                                                </SelectItem>
                                                <SelectItem value="Zelle">
                                                    Zelle
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                onClick={handleSubmit}
                                disabled={!isFormValid()}
                                className="w-full mt-10 py-6 bg-walnut hover:bg-walnut/90 text-primary-foreground text-lg font-Corn font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
