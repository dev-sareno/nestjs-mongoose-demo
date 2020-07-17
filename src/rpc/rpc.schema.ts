import * as mongoose from 'mongoose';

export const RpcSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], },
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
});

export interface IRpc extends mongoose.Document {
  id: string;
  name: string;
  location: {
    type: string,
    coordinates: number[],
  };
}
