import * as mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], },
  address: { type: String, required: [true, 'Address is required'], },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  tags: { type: [String], required: false, },
});

export interface IRestaurant extends mongoose.Document {
  id: string;
  name: string;
  address: string;
  location: {
    type: string,
    coordinates: number[],
  };
  tags?: string[];
}
