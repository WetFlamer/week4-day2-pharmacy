const Medicines = require('../models/Medicines.model')
const Clients = require("../models/Clients.model")

module.exports = clientsController = {
    addClient: (req, res) => {
        Clients.create({
            name: req.body.name
        }).then( () => {
            res.json('Клиент добавлен')
        })
    },
    addtoBasket: (req, res) => {
        Clients.findByIdAndUpdate(req.params.clientId, {
        $addToSet: {basket: req.body.basket},
        $set: {
            finalprice: finalprice.reduce(sum, basket)
        }
        }).populate('medicines').then(() => {
            res.json('Товар добавлен в корзину')
        })
    },
    removefromBasket: (req, res) => {
        Clients.findByIdAndUpdate(req.params.clientId, {
            $pull: {basket: req.body.basket},
        }).then(() => {
            res.json('Товар удалён с корзины')
        })
    },
    clearBasket: (req, res) => {
        Clients.findByIdAndUpdate(req.params.clientId, {
            $set: {
                basket: []
            },
        }).then( () => {
            res.json('Корзина очищена')
        })
    },
    buyBasket: (req, res) => {
        Clients.findByIdAndUpdate(req.params.clientId)
    }
}