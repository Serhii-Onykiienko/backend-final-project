import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    password: {
        type: String,   
        required: true,
        unique: true,
        trim: true,
    },
    },
    { timestamps: true },
);

userSchema.pre('save', function () {
  if (!this.username) {
    this.username = this.email.trim();
  }
});

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

export const User = model("User", userSchema);
