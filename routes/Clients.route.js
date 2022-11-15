const { Router } = require('express');
const clientsController = require("../controllers/Clients.controller");

const router = Router()
// CLIENTS
router.post('/client/create', clientsController.addClient)
router.patch('/medicines/take/:clientId', clientsController.addtoBasket)
router.patch('/medicines/remove/:clientId', clientsController.removefromBasket)
router.patch('/medicines/basket/clear/:clientId', clientsController.clearBasket)
module.exports = router