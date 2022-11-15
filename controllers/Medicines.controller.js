const Medicines = require("../models/Medicines.model");

module.exports = medicinesController = {
    addMed: (req, res) => {
        Medicines.create({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            soldbyPres: req.body.soldbyPres
        })
    },
    getMeds: (req, res) => {
        Medicines.find().then( meds => {
            res.json(meds)
        })
    },
    editMeds: (req, res) => {
        Medicines.findByIdAndUpdate(req.params.medId, {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            soldbyPres: req.body.soldbyPres
        }, {new: true}).then(med => {
            res.json(med)
        })
    },
    deleteMeds: (req, res) => {
        Medicines.findByIdAndDelete(req.params.medId).then( () => {
            res.json('Лекарство удалено')
        })
    },
}