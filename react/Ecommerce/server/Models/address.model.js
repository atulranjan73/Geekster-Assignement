import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  address_line: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  pincode: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  mobile: {
    type: Number,
    default: null,
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
    timestamps: true;
});


const AddressModel = mongoose.model('address' , addressSchema)
export default AddressModel
