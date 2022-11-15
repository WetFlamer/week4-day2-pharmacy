const { Router } = require("express");
const medicinesController = require("../controllers/Medicines.controller");

const router = Router();
// ADMIN
router.post('/admin/create/medicines', medicinesController.addMed)
router.patch('/admin/edit/:medId', medicinesController.editMeds)
router.delete('/admin/delete/:medId', medicinesController.deleteMeds)
// CLIENTS
router.get('/medicines', medicinesController.getMeds)

module.exports = router