import { v } from "convex/values";
import { action, mutation, query } from "./_generated/server";

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
        await ctx.db.insert("custom", { name, email, phone, eventType, date, guestCount, deliverType, payment, completed: false });
    }
})

export const getCustoms = query({
    handler: async (ctx) => {
        return await ctx.db.query("custom").collect();
    }
})

export const addNoteCustom = mutation({
    args: {
        id: v.string(),
        note: v.string()
    },
    handler: async (ctx, args) => {
        const { id, note } = args;
        await ctx.db.patch(id, {notes: note})
    }
})
