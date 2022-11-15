const mongoose = require('mongoose')

const categorySchema = {
    name: String,
}

const Categories = mongoose.model('categories', categorySchema)

module.exports = Categories