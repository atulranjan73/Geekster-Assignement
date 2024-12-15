import mongoose from "mongoose";

// Address Schema
const addressSchema = new mongoose.Schema(
  {
    address_line: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    pincode: { type: String, default: "" },
    country: { type: String, default: "" },
    mobile: { type: Number, default: null },
  },
  { timestamps: true }
);

// Category Schema
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

// SubCategory Schema
const subCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "" },
    categoryId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  },
  { timestamps: true }
);

// Product Schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: [{ type: String, default: "" }], // Array of image URLs
    categoryId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    subCategoryId: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }],
    unit: { type: String, default: "" },
    stock: { type: Number, default: 0 },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    description: { type: String, default: "" },
    more_details: { type: Object, default: {} },
    publish: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// CartProduct Schema
const cartProductSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, default: 1 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product_details:{ _id :String , name :String  ,image :Array,  }
  },
  { timestamps: true }
);

// Models
const AddressModel = mongoose.model("Address", addressSchema);
const CategoryModel = mongoose.model("Category", categorySchema);
const SubCategoryModel = mongoose.model("SubCategory", subCategorySchema);
const ProductModel = mongoose.model("Product", productSchema);
const CartProductModel = mongoose.model("CartProduct", cartProductSchema);

// Exports
export {
  AddressModel,
  CategoryModel,
  SubCategoryModel,
  ProductModel,
  CartProductModel,
};
