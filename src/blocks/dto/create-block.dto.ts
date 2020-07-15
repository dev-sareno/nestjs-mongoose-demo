export interface CreateBlockDto {
  name: string;
  address: string;
  geometry: {
    type: string,
    coordinates: number[][][],
  },
  tags: string[],
}
