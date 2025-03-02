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
                )
            })
        ),
        status: v.union(v.literal("active"), v.literal("completed"))
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
                )
            })
        ),
        totalPrice: v.number()
    })
})