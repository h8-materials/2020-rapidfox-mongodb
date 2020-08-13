const db = require("../config/mongo");
const User = db.collection("users");
const { ObjectID } = require("mongodb");

class UserModel {
  static findAll() {
    return User.find().toArray();
  }

  static findOne(id) {
    return User.findOne({ _id: ObjectID(id) });
  }

  static insertOne(newUser) {
    return User.insertOne(newUser);
  }

  static findOneAndUpdate(id, updatedUser) {
    return User.findOneAndUpdate(
      { _id: ObjectID(id) },
      { $set: updatedUser },
      {
        returnOriginal: false,
      }
    );
  }

  static findOneAndDelete(id) {
    return User.findOneAndDelete({ _id: ObjectID(id) });
  }
}

module.exports = UserModel;
