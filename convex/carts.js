import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createCart = mutation({
    args:{
        userId: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        productId: v.string(),
        topper: v.optional(
            v.object({
                text: v.string(),
            })
        )
    },
    handler: async (ctx, args) => {

        const activeCart = await ctx.db.query("shoppingCarts").filter(q => q.eq(q.field("userId"),args.userId))
        .filter(q => q.eq(q.field("status"), "active")).unique()

        if (activeCart){
            const existingItem = activeCart.items.find(item => item.productId === args.productId && item.topper.text === args.topper.text)

            if (existingItem){
                existingItem.quantity += args.quantity
                existingItem.price += args.price
            }
            else{
                activeCart.items.push({
                    productId: args.productId,
                    name: args.name,
                    price: args.price,
                    quantity: args.quantity,
                    topper: args.topper
                })
            }
            await ctx.db.patch(activeCart._id, {items: activeCart.items})
        }
        else{

            await ctx.db.insert("shoppingCarts", {
                userId: args.userId,
                items: [{
                    productId: args.productId,
                    name: args.name,
                    price: args.price,
                    quantity: args.quantity,
                    topper: args.topper
                }],
                status: "active"
            })
        }
    }
})

export const removeItem = mutation({
    args: {
        userId: v.string(),
        productId: v.string(),
    }, 
    handler: async (ctx, args) => {
        const activeCart = await ctx.db.query("shoppingCarts").filter(q => q.eq(q.field("userId"), args.userId))
        .filter(q => q.eq(q.field("status"), "active"))
        .unique()

        console.log(activeCart)

        if(activeCart){
            const existingItem = activeCart.items.find(item => item.productId === args.productId)
            console.log(existingItem)
            const oldPrice = existingItem.price / existingItem.quantity
            existingItem.quantity -= 1
            existingItem.price -= oldPrice
            if (existingItem.quantity === 0){
                activeCart.items = activeCart.items.filter(item => item.productId !== args.productId)
            }
            await ctx.db.patch(activeCart._id, {items: activeCart.items})
        }
    }
})

export const addItem = mutation({
    args:{
        userId: v.string(),
        productId: v.string()
    },
    handler: async (ctx, args) => {
        const activeCart = await ctx.db.query("shoppingCarts").filter(q => q.eq(q.field("userId"), args.userId))
        .filter(q => q.eq(q.field("status"), "active"))
        .unique()

        if(activeCart){
            const existingItem = activeCart.items.find(item => item.productId === args.productId)
            const oldPrice = existingItem.price / existingItem.quantity
            existingItem.quantity += 1
            existingItem.price += oldPrice
            await ctx.db.patch(activeCart._id, {items: activeCart.items})
        }
    }
})

export const completeCart = mutation({
    args: {
        userId: v.string()
    },
    handler: async (ctx, args) => {
        const activeCart = await ctx.db.query("shoppingCarts").filter(q => q.eq(q.field("userId"), args.userId))
        .filter(q => q.eq(q.field("status"), "active")).unique()

        console.log(activeCart)

        if (activeCart){
            await ctx.db.patch(activeCart._id, {status: "completed"})
            return activeCart
        }
    }
})

export const getCart = query({
    args: {
        userId: v.string()
    },
    handler: async (ctx, args) => {
        const activeCart = await ctx.db.query("shoppingCarts").filter(q => q.eq(q.field("userId"), args.userId))
        .filter(q => q.eq(q.field("status"), "active"))
        .unique()
        console.log(activeCart)
        if (activeCart && activeCart.items.length > 0){
            return activeCart
        }
    }
})