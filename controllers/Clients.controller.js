const Medicines = require('../models/Medicines.model')
const Clients = require("../models/Clients.model")

module.exports = clientsController = {
    addClient: (req, res) => {
        Clients.create({
            name: req.body.name,
            balance: req.body.balance
        }).then( () => {
            res.json('Клиент добавлен')
        })
    },
    addtoBasket: async(req, res) => {
            const user = await Clients.findById(req.params.clientId)
            const drug = await Medicines.findById(req.body.drug)
    
            if (drug.soldbyPres) {
                if(!user.recipe) {
                return res.json("Лекарство продается по рецепту")
                }
            }
            await Clients.findByIdAndUpdate(req.params.clientId, {$addToSet: {basket: req.body.drug}})
            res.json("Лекарство добавлено в корзину")
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
    buyBasket: async(req, res) => {
        const user = await Clients.findById(req.params.clientId).populate('basket')
        const drug = await Medicines.findById(req.params.drug)
        const finalSum = user.basket.reduce((sum, drug) => {
            return sum + drug.price
        }, 0)
        const sprice = user.balance - finalSum
        await Clients.findByIdAndUpdate(req.params.clientId, {
            $set: {basket: [], balance: sprice},
        })
        res.json('успешно') 
    },
    topUp: async(req, res) => {
         const user =  await Clients.findById(req.params.clientId)
        const b = user.balance + req.body.balance

        await Clients.findByIdAndUpdate(req.params.clientId, {
            $set: {balance: b}
        })
        res.json('Баланс пополнен')
    },
}