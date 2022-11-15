const { Router } = require("express");
const medicinesController = require("../controllers/Medicines.controller");

const router = Router();
// ADMIN
router.post('/admin/medicines/create', medicinesController.addMed)
router.patch('/admin/edit/:medId', medicinesController.editMeds)
router.delete('/admin/delete/:medId', medicinesController.deleteMeds)
// CLIENTS
router.get('/medicines', medicinesController.getMeds)
router.get('/medicines/:medId', medicinesController.getMedsbyId)
router.get('/medicines/category/:categoryId', medicinesController.getMedsbyCategory)

module.exports = router