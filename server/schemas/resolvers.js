const { AuthenticationError } = require('apollo-server-express');
const { User, Trail } = require('../models');
const { signToken } = require('../utils/auth');

// Set-up Stripe for future development
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc);

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    trails: async (parent, { }) => {
      const params = {};

    }

  }
};

module.exports = resolvers;
