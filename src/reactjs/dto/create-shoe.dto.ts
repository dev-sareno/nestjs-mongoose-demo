export interface CreateShoeDto {
  brand: string;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
  tags?: string[];
}
