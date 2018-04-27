import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ProductSchema = new Schema({
title: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    productURL: {
        type: String,
        required: true
    }
})
export default mongoose.model('product', ProductSchema)