const mongoose = require("mongoose");

const collectionsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
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

module.exports = mongoose.model("Collection", collectionsSchema);