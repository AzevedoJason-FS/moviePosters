const mongoose = require("mongoose");

const postersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    img: { 
        type : String,
        required: true,
    },
    size: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Collection",
    },
    format: {
        type: String,
        required: true,
    },
    rolled_folded:{
        type: Boolean,
        required: true,
    },
    year: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Collection",
    },
    orginal_reprint: {
        type: Boolean,
        required: true,
    },
    collectionName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
        required: true
    },
    price: { 
        type : Number, 
        required: true
    },
    inventory: {
        type: Number,
        required: true    
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Poster", postersSchema);