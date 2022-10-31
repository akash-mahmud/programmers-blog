import { pagination } from './pagination';
interface categoryAttribute {

    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  
}
export interface catagoryReposnce {
  id: number;
  attributes: categoryAttribute[];
}
export interface categoryWithoutImage {
  data: catagoryReposnce[];
  meta?: {
    pagination: pagination;
  };
}

