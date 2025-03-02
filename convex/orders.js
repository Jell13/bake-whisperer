import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
    args: {
        userId: v.string(),
        name: v.string(),
        email: v.string(),
        date: v.string(),
        totalPrice: v.number()
    },
    handler: async (ctx, args) => {
        const completedCart = await ctx.db.query("shoppingCarts").filter(q => q.eq(q.field("userId"), args.userId))
        .filter(q => q.eq(q.field("status"), "completed")).first()

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