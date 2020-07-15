import * as mongoose from 'mongoose';

export const BlockSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], },
  address: { type: String, required: [true, 'Address is required'], },
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Polygon'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [[[Number]]],
      required: true
    }
  },
  tags: { type: [String], required: false, },
});

export interface IBlock extends mongoose.Document {
  id: string;
  name: string;
  address: string;
  geometry: {
    type: string,
    coordinates: number[][][],
  };
  tags?: string[];
}
