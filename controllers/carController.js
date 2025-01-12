import Car from "../models/car.js";

export const getAllCars = async () => {
  const cars = await Car.find();
  return cars;
};

export const createCar = async (carInput) => {
  const newCar = await Car.create(carInput);

  return newCar;
};

export const getCarById = async (carId) => {
  const car = await Car.findById(carId);

  if (!car) {
    throw new Error("Car not found");
  }

  return car;
};

export const updateCar = async (carId, carInput) => {
  const car = await Car.findById(carId);

  if (!car) {
    throw new Error("Car not found");
  }

  await car.set(carInput).save();

  return true;
};

export const deleteCar = async (carId) => {
  const car = await Car.findById(carId);

  if (!car) {
    throw new Error("Car not found");
  }

  await car?.deleteOne();

  return true;
};
