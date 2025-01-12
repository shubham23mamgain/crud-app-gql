import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter car name"],
    },
    description: {
      type: String,
      required: [true, "Please enter car description"],
    },
    status: {
      type: String,
      default: "Draft",
    },
    rentPerDay: {
      type: Number,
      required: [true, "Please enter rent per day"],
    },
    address: {
      type: String,
      required: [true, "Please enter address"],
    },
    images: [
      {
        url: String,
        public_id: String,
      },
    ],
    brand: {
      type: String,
      required: [true, "Please enter Car Brand"],
    },
    year: {
      type: Number,
      required: [true, "Please enter Car Year"],
    },

    transmission: {
      type: String,
      required: [true, "Please enter Car Transmission"],
    },
    milleage: {
      type: Number,
      required: [true, "Please enter Car Milleage"],
    },
    seats: {
      type: Number,
      required: [true, "Please enter Car Seats"],
    },
    doors: {
      type: Number,
      required: [true, "Please enter Car Doors"],
    },
    power: {
      type: Number,
      required: [true, "Please enter Car Power"],
    },
    fuelType: {
      type: String,
      required: [true, "Please enter Car Fuel Type"],
    },

    category: {
      type: String,
      required: [true, "Please enter Car Cateogry"],
    },
    reviews: [String],
  },
  {
    timestamps: true,
  }
);

carSchema.virtual("ratings").get(function () {
  return {
    value: 5,
    count: 10,
  };
});

const Car = mongoose.model("Car", carSchema);
export default Car;
