import { v } from "convex/values";
import { action, mutation } from "./_generated/server";

export const createCustom = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        phone: v.string(),
        eventType: v.string(),
        date: v.number(),
        guestCount: v.number(),
        deliverType: v.string(),
        payment: v.string()
    },
    handler: async (ctx, args) => {

        const { name, email, phone, eventType, date, guestCount, deliverType, payment } = args;
        await ctx.db.insert("custom", { name, email, phone, eventType, date, guestCount, deliverType, payment });
    }
})
