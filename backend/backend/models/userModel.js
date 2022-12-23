const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    phoneNumber:{
      type: String,
      required:[true,'Please add phone Number']
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
