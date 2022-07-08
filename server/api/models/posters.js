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
        data: Buffer,
    },
    size: {
        type: String,
        required: true,
    },
    format: {
        type: String,
        required: true,
    },
    rolled_folded:{
        type: String,
        required: true,
    },
    year: {
        type : Number, 
        required: true,
    },
    orginal_reprint: {
        type: String,
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