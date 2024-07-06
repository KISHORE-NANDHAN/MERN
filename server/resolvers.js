const User = require('./model/userSchema');

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      try {
        return await User.findById(id);
      } catch (err) {
        throw new Error('Error retrieving user');
      }
    },
    getUsers: async () => {
      try {
        return await User.find();
      } catch (err) {
        throw new Error('Error retrieving users');
      }
    },
    searchUsers: async (_, { name }) => {
      try {
        return await User.find({ name: new RegExp(name, 'i') });
      } catch (err) {
        throw new Error('Error searching users');
      }
    },
    getLimitedUsers: async (_, { limit, offset }) => {
      try {
        return await User.find().skip(offset).limit(limit);
      } catch (err) {
        throw new Error('Error retrieving limited users');
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const { name, email, password } = input;
        if (!name || !email || !password) {
          throw new Error('Please enter all the fields');
        }
        const newUser = new User({ name, email, password });
        return await newUser.save();
      } catch (err) {
        throw new Error(err.message);
      }
    },
    changePass: async (_, { id, password }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { password },
          { new: true }
        );
        if (!updatedUser) {
          throw new Error('User not found');
        }
        return updatedUser;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    updateUser: async (_, { id, input }) => {
      try {
        return await User.findByIdAndUpdate(id, input, { new: true });
      } catch (err) {
        throw new Error('Error updating user');
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        return await User.findByIdAndDelete(id);
      } catch (err) {
        throw new Error('Error deleting user');
      }
    },
  },
  User: {
    email: (parent) => parent.email || '',
    name: (parent) => parent.name || '',
    password: (parent) => parent.password || '',
  },
};

module.exports = resolvers;
