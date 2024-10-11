const carsService = require("../services/cars");
const { successResponse } = require("../utils/response");

exports.getCarsbyId  = (req, res, next) => {
    const { id } = req.params;
    const data = carsService.getCarsbyId(id);
    successResponse(res, data);
};

exports.createCars = async (req, res, next) => {
    const data = await carsService.createCars(req.body, req.files);
    successResponse(res, data);
};

exports.updateCars = async (req, res, next) => {
    const { id } = req.params;
    const data = await carsService.updateCars(id, req.body, req.files);
    successResponse(res, data);
};

exports.deleteCarsbyId = (req, res, next) => {
    const { id } = req.params;
    const data = carsService.deleteCarsbyId(id);
    successResponse(res, data);
};