const User = require("../models/User");

class UserController {
  static async findAll(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }

  static async findOne(req, res) {
    try {
      const user = await User.findOne(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  static async insertOne(req, res) {
    try {
      const newUser = req.body;
      const user = await User.insertOne(newUser);
      res.status(200).json(user.ops[0]);
    } catch (error) {
      console.log(error);
    }
  }

  static async findOneAndUpdate(req, res) {
    try {
      const updatedUser = req.body;
      const id = req.params.id;
      const user = await User.findOneAndUpdate(id, updatedUser);
      res.status(200).json(user.value);
    } catch (error) {
      console.log(error);
    }
  }

  static async findOneAndDelete(req, res) {
    try {
      const user = await User.findOneAndDelete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
