import { fetchProducts, createProduct, deleteProduct, all } from "../api";

export default {
  state: {
    products: [],
    totalProducts: 0,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_TOTAL_PRODUCTS(state, total) {
      state.totalProducts = total;
    },
  },
  actions: {
    async fetchProducts({ commit }, { options, filters }) {
      try {
        const { data, headers } = await fetchProducts(options, filters);
        const totalProducts = +headers["x-total-count"];
        commit("SET_PRODUCTS", data);
        commit("SET_TOTAL_PRODUCTS", totalProducts);
      } catch (error) {
        return error;
      }
    },
    async createProduct(_rest, product) {
      try {
        return await createProduct(product);
      } catch (error) {
        return error;
      }
    },
    async deleteProduct(_rest, productId) {
      try {
        const deletePromises = productId.map((id) => deleteProduct(id));
        return await all(deletePromises);
      } catch (error) {
        return error;
      }
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getTotalProducts(state) {
      return state.totalProducts;
    },
  },
};
