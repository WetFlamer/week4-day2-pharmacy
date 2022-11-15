const mongoose = require('mongoose')

const medicinesSchema = {
    name: String,
    category: {
        ref: "categories",
        type: mongoose.SchemaTypes.ObjectId
    },
    price: Number,
    soldbyPres: Boolean
}

const Medicines = mongoose.model('medicines', medicinesSchema)
module.exports = Medicines