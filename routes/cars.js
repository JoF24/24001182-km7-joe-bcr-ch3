const express = require("express");
const cars = require("../data/cars.json");
const {
    validateGetCarsbyId,
    validateCreateCars,
    validateUpdateCars,
    validateDeleteCarsbyId,
} = require("../middlewares/cars")
const {
    getCarsbyId,
    createCars,
    updateCars,
    deleteCarsbyId,
} = require("../controllers/cars")
const router = express.Router();

router.get('/', (req, res) => {
    res.json({cars});
});

router.get('/:id', validateGetCarsbyId, getCarsbyId);
router.post("/", validateCreateCars, createCars);
router.put("/:id", validateUpdateCars, updateCars);
router.delete("/:id", validateDeleteCarsbyId, deleteCarsbyId);

module.exports = router;