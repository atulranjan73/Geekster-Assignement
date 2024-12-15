import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide a name"],
  },
  email: {
    type: String,
    required: [true, "Provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Provide a password"],
  },
  avatar: {
    type: String,
    default: "",
  },
  mobile: {
    type: Number,
    default: null,
  },
  refresh_token: {
    type: String,
    default: "",
  },
  verify_email: {
    type: Boolean,
    default: false,
  },
  last_login_date: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "banned"], // Example enum values for account status
    default: "active",
  },
  address_details: {
    type: Array,
    default: [],
  },
  shopping_cart: {
    type: Array,
    default: [],
  },
  orderHistory: {
    type: Array,
    default: [],
  },
  forgot_password_otp: {
    type: String,
    default: "",
  },
  forgot_password_expiry: {
    type: Date,
    default: null,
  },
  role: {
    type: String,
    enum: ["user", "admin", "superadmin"], // Example roles
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
},{
    timestamps : true ;
});

const userModel  = mongoose.model("user " , userSchema) 
export default userModel ; 