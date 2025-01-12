import { gql } from "graphql-tag";

export const carTypeDefs = gql`
  type CarImages {
    url: String
    public_id: String
  }

  type CarRatings {
    value: Float
    count: Int
  }

  type Car {
    id: ID!
    name: String!
    description: String!
    status: String!
    rentPerDay: Float!
    address: String!
    year: Int!
    images: [CarImages]
    power: Int!
    milleage: Int!
    brand: String!
    ratings: CarRatings
    transmission: String!
    fuelType: String!
    seats: Int!
    doors: Int!
    category: String!
    createdAt: String!
    updatedAt: String!
  }

  input CarInput {
    name: String!
    description: String!
    status: String
    rentPerDay: Float!
    address: String!
    year: Int!
    images: [String]
    power: Int!
    milleage: Int!
    brand: String!
    transmission: String!
    fuelType: String!
    seats: Int!
    doors: Int!
    category: String!
  }

  type Query {
    getAllCars: [Car]
    getSingleCar(carId: ID!): Car
  }

  type Mutation {
    createCar(carInput: CarInput!): Car
    updateCar(carId: ID!, carInput: CarInput!): Boolean
    deleteCar(carId: ID!): Boolean
  }
`;
