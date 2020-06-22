export interface CreateRestaurantDto {
  name: string;
  address: string;
  location: {
    type: string,
    coordinates: number[],
  },
  tags: string[],
}
