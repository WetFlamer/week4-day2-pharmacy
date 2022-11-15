const Categories = require("../models/Category.model")

module.exports = categoriesController = {
    addCategory: (req, res) => {
        Categories.create({
            name: req.body.name
        }).then( () => {
            res.json('Категория создана')
        })
    },
    getCategories: (req, res) => {
        Categories.find().then(categories => {
            res.json(categories)
        })
    },
    updateCategory: (req, res) => {
        Categories.findByIdAndUpdate(req.params.categoryId, {
            name: req.body.name
        }, {new: true}).then(category => {
            res.json(category)
        })
    },
    deleteCategory: (req, res) => {
        Categories.findByIdAndDelete(req.params.categoryId).then(() => {
            res.json('Категория удалена')
        })
    }
}