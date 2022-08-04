const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Pet {
    _id: ID
    name: String
    picture: String
    age: Int
    breed: String
    gender: String
    coat: String
    color: String
    temperment: String
    funFact: String
    disabilities: String
    allergies: String
    likes: [String]
  }
  input PetInput {
    name: String
    picture: String
    age: Int
    breed: String
    gender: String
    coat: String
    color: String
    temperment: String
    funFact: String
    disabilities: String
    allergies: String
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    petCount: Int
    pets: [Pet]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    user(username: String!): User
    users: [User]
    pets: [Pet]
    findMatch(petId: String!): [Pet]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    likePet(petId: String!, likedId: String!): Pet
    addPet(input: PetInput!): Pet
    removePet(petId: String!): User
  }
`;

module.exports = typeDefs;
