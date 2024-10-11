const cars = require("../data/cars.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

exports.getCarsbyId = (id) => {
    const searchCars = cars.find((cars) => cars.id == id);
    return searchCars;
};

exports.createCars = (data) => {
    const newCars = {
        id: uuidv4(),
        ...data,
    };

    cars.push(newCars);

    fs.writeFileSync(
        "./data/cars.json",
        JSON.stringify(cars, null, 4),
        "utf-8"
    );

    return newCars;
};

exports.updateCars = (id, data) => {
    const searchCars = cars.find((cars) => cars.id == id);
    if (!searchCars) {
        throw new NotFoundError("Student is Not Found!");
    }

    Object.assign(searchCars, data);

    fs.writeFileSync(
        "../data/cars.json",
        JSON.stringify(cars, null, 4),
        "utf-8"
    );

    return searchCars;
};

exports.deleteCarsbyId = (id) => {
    const carsIndex = cars.findIndex((cars) => cars.id == id);

    if (carsIndex < 0) {
        return null;
    }

    const deletedCars = cars.splice(carsIndex, 1);

    fs.writeFileSync(
        "../data/cars.json",
        JSON.stringify(cars, null, 4),
        "utf-8"
    );
    return deletedCars;
};

