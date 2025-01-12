import {
  createCar,
  deleteCar,
  getAllCars,
  getCarById,
  updateCar,
} from "../../controllers/carController.js";

export const carResolvers = {
  Query: {
    getAllCars: async (parent) => await getAllCars(),
    getSingleCar: async (_, { carId }) => await getCarById(carId),
  },

  Mutation: {
    createCar: async (_, { carInput }) => {
      return await createCar(carInput);
    },

    updateCar: async (_, { carId, carInput }) => {
      return await updateCar(carId, carInput);
    },

    deleteCar: async (_, { carId }) => {
      return await deleteCar(carId);
    },
  },
};
