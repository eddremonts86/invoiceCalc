import axios from "axios";
import { globalEnv } from "@/utils";

const { apiUrlBase: API_URL } = globalEnv;
const API_URL_PRODUCTS = `${API_URL}/products`;

export const fetchProducts = async (options, filters) => {
  try {
    return await axios.get(API_URL_PRODUCTS, {
      params: {
        ...options,
        ...filters,
      },
    });
  } catch (error) {
    return error;
  }
};
export const createProduct = async (product) => {
  try {
    return await axios.post(API_URL_PRODUCTS, product);
  } catch (error) {
    return error;
  }
};
export const updateProduct = async (product) => {
  try {
    return await axios.put(`${API_URL_PRODUCTS}/${product.id}`, product);
  } catch (error) {
    return error;
  }
};
export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`${API_URL_PRODUCTS}/${id}`);
  } catch (error) {
    return error;
  }
};

export const all = async (request) => {
  return await axios.all(request);
};
