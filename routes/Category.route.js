const { Router } = require('express');
const categoriesController = require("../controllers/Category.controller");

const router = Router()
// ADMIN
router.post('/admin/category/create', categoriesController.addCategory)
router.patch('/admin/category/:categoryId', categoriesController.updateCategory)
router.delete('/admin/category/:categoryId', categoriesController.deleteCategory)
// CLIENTS
router.get('/categories', categoriesController.getCategories)


module.exports = router