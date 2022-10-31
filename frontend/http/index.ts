import { categoryWithoutImage } from './../types/category';
import apiEndpoint, { apiEndpointAccessToken } from "@/config/api";
import endpoints from "@/config/endpoints";
import axios from "axios";

const api = axios.create({
  baseURL: apiEndpoint,
  headers: {
    Authorization: `Bearer ${apiEndpointAccessToken}`,
  },
});


export const fetchCategories = async (): Promise<categoryWithoutImage | string> => {
  try {
    const { data: categories } = await api.get<categoryWithoutImage>(
      endpoints.category.all
    );


    return categories;
  } catch (error) {
    return error as Error["message"];
  }
};