import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
    args: {
        userId: v.string(),
        name: v.string(),
        email: v.string(),
        date: v.string(),
        totalPrice: v.number(),
        cartId: v.id("shoppingCarts")
    },
    handler: async (ctx, args) => {
        const completedCart = await ctx.db.query("shoppingCarts").filter(q => q.eq(q.field("userId"), args.userId))
        .filter(q => q.eq(q.field("status"), "completed")).filter(q => q.eq(q.field("_id"), args.cartId)).unique()

        if(completedCart){
            await ctx.db.insert("orders", {
                userId: args.userId,
                name: args.name,
                email: args.email,
                date: args.date,
                items: completedCart.items,
                totalPrice: args.totalPrice
            })
        }
    }
})

export const getOrder = query({
    args:{
        userId: v.string()
    },
    handler: async (ctx, args) => {
        const allOrders = await ctx.db.query("orders").collect();
    }
})