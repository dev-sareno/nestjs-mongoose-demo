import * as mongoose from 'mongoose';

export const ShoeSchema = new mongoose.Schema({
  brand: { type: String, required: [true, 'Brand is required'], },
  name: { type: String, required: [true, 'Name is required'], },
  size: { type: String, required: [true, 'Size is required'], },
  color: { type: String, required: [true, 'Color is required'], },
  price: { type: Number, required: [true, 'Price is required'], },
  image: { type: String, required: [true, 'Image is required'], },
  tags: { type: [String], required: false, },
});

export interface IShoe extends mongoose.Document {
  id: string;
  brand: string;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
  tags?: string[];
}
