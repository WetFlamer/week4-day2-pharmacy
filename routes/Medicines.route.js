const { Router } = require("express");
const medicinesController = require("../controllers/Medicines.controller");

const router = Router();
router.post('/admin/create/medicines', medicinesController.addMed)
router.get('/medicines', medicinesController.getMeds)
router.patch('/admin/edit/:medId', medicinesController.editMeds)
router.delete('/admin/delete/:medId', medicinesController.deleteMeds)
module.exports = router