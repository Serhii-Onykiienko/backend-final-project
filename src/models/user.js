import { Schema, model } from "mongoose";
import { ROLES } from "../constants/roles.js";

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
        required: false,
        unique: true,
        sparse: true, // Дозволяє багатьом користувачам не мати email, але якщо він є — він унікальний
        trim: true, 
    },
    telephone: {
        type: String,
        required: false,
        unique: true,
        sparse: true, // Дозволяє багатьом користувачам не мати телефон, але якщо він є — він унікальний
        trim: true, 
    },
    role: {
        type: String,
        enum: Object.values(ROLES),
        default: ROLES.user,
    },
    password: {
        type: String,   
        required: true,
        // unique: false,
        trim: true,
    },
    },
    { timestamps: true, versionKey: false },
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
