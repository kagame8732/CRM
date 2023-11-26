import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    prodName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Product", productSchema);
