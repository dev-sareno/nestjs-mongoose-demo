export interface MongoDbGeometry {
  type: 'Point' | 'Polygon' | string;
  coordinates: number[] | number[][][];
}
