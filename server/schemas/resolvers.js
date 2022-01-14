const { AuthenticationError } = require('apollo-server-express');
const { User, Trail } = require('../models');
const { signToken } = require('../utils/auth');

// Set-up Stripe for future development
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc);

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addTrail: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const trail = await Trail.findOne(params._id);
      }
      return trail;
    }

  }
};

module.exports = resolvers;
