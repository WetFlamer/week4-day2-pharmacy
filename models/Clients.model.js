const mongoose = require('mongoose')

const clientsScheme = {
 name: String,
 balance: Number,
 basket: [{
    ref: 'medicines',
    type: mongoose.SchemaTypes.ObjectId,
}],
 recipe: Boolean
}

const Clients = mongoose.model('clients', clientsScheme)

module.exports = Clients