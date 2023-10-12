export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
};

export interface Size{
  id: string;
  url: string;
  value: string;
};

export interface Color{
  id: string;
  url: string;
  value: string;
};

export interface Image{
  id: string;
  url: string;
};