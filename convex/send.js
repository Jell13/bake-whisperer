"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import emailjs from "@emailjs/nodejs";

export const sendEmail = action({
    args: {
        name: v.string(),
        email: v.string(),
        phone: v.string(),
        eventType: v.string(),
        date: v.number(),
        guestCount: v.number(),
        deliverType: v.string(),
        payment: v.string(),
    },
    handler: async (ctx, args) => {
        const {
            name,
            email,
            phone,
            eventType,
            date,
            guestCount,
            deliverType,
            payment,
        } = args;

        const eventDate = new Date(date);
        const formattedDate = eventDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        try {
            const response = await emailjs.send(
                process.env.EMAILJS_SERVICE_ID,
                process.env.EMAILJS_TEMPLATE_ID,
                {
                    name,
                    email,
                    phone,
                    eventType,
                    date: formattedDate,
                    guestCount,
                    deliverType,
                    payment,
                },
                {
                    publicKey: process.env.EMAILJS_PUBLIC_KEY,
                }
            );
        } catch (err) {
            console.log(err);
        }
    },
});
