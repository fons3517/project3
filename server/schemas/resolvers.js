const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Uh oh! Incorrect email or password.");
      }
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Uh oh! Incorrect email or password.");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveTrail: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { trails: input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Oops! Please login!");
    },
    removeTrail: async (parent, { trailId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { trails: { trailId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Oops! Please login!");
    },
    completedTrail: async (parent, { input }, context) => {
      console.log(context);
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { hiked: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Oops! Please login!");
    },
    removeHike: async (parent, { trailId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { hiked: { trailId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Oops! Please login!");
    }
  }
};

module.exports = resolvers;
