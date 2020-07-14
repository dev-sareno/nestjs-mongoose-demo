export interface UpdateRestaurantDto {
  _id: string;
  name: string;
  address: string;
  location: {
    type: string,
    coordinates: number[], //[lng, lat]
  };
  tags?: string[];
}
