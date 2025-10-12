import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    shoppingCarts: defineTable({
        userId: v.string(),
        items: v.array(
            v.object({
                productId: v.string(),
                name: v.string(),
                price: v.number(),
                quantity: v.number(),
                topper: v.optional(
                    v.object({
                        text: v.string(),
                    })
                ),
            })
        ),
        status: v.union(v.literal("active"), v.literal("completed")),
    }),
    orders: defineTable({
        userId: v.string(),
        name: v.string(),
        email: v.string(),
        date: v.string(),
        items: v.array(
            v.object({
                productId: v.string(),
                name: v.string(),
                price: v.number(),
                quantity: v.number(),
                topper: v.optional(
                    v.object({
                        text: v.string(),
                    })
                ),
            })
        ),
        totalPrice: v.number(),
        completed: v.boolean(),
        status: v.union(v.literal("Paid"), v.literal("Unpaid")),
        notes: v.optional(v.string())
    }),

    menu: defineTable({
        desc: v.string(),
        frontImage: v.string(),
        id: v.string(),
        images: v.array(v.string()),
        ingredients: v.array(v.string()),
        name: v.string(),
        price: v.float64(),
        type: v.string(),
    }),

    custom: defineTable({
        name: v.string(),
        email: v.string(),
        phone: v.string(),
        eventType: v.string(),
        date: v.number(),
        guestCount: v.number(),
        deliverType: v.string(),
        payment: v.string()
    })
});
