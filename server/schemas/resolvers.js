const { AuthenticationError } = require('apollo-server-express');
const { } = require('../models');
const { signToken } = require('../utils/auth');

// Set-up Stripe for future development
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc);

const resolvers = {
  Query: {
    model: async () => {
      return await model.find();
    },
    models: async (parent, { }) => {

    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await UserInputError.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addTrail: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const trail = new Trail({ args });

      }
    }
  }
};

module.exports = resolvers;
