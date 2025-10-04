import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getMenu = query({
    handler: async (ctx) => {

        const menu = await ctx.db.query("menu").collect();
        if(!menu){
            throw new ConvexError("Menu not found");
        }
        
        return menu
    }
})

export const editMenu = mutation({
    args: {
        id: v.string(),
        name: v.string(),
        desc: v.string(),
        type: v.string(),
        price: v.number(),
        frontImage: v.string(),
        images: v.array(v.string()),
        ingredients: v.array(v.string())
    },
    handler: async (ctx, args) => {

        const { id, name, desc, type, price, frontImage, images, ingredients } = args;
        console.log(id)
        
        await ctx.db.patch(id, {
            name,
            desc,
            type,
            price,
            frontImage,
            images,
            ingredients
        })

    }
})

export const getMenuInfo = query({
    args: {
        id: v.string()
    },
    handler: async (ctx, args) => {
        
        const { id } = args;
        const menuInfo = await ctx.db.get(id);

        return menuInfo;
    }
})

export const addMenu = mutation({
    args: {
        id: v.string(),
        name: v.string(),
        desc: v.string(),
        type: v.string(),
        price: v.number(),
        frontImage: v.string(),
        images: v.array(v.string()),
        ingredients: v.array(v.string())
    },
    handler: async (ctx, args) => {
        const { id, name, desc, type, price, frontImage, images, ingredients } = args;
        await ctx.db.insert("menu", {
            id,
            name,
            desc,
            type,
            price,
            frontImage,
            images,
            ingredients
        })
    }
})

export const deleteMenu = mutation({
    args: {
        id: v.string()
    },
    handler: async (ctx, args) => {

        const { id } = args;
        
        await ctx.db.delete(id);
    }
})