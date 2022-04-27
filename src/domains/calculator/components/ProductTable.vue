<template>
  <v-row>
    <v-col cols="12">
      <calculator-table
        :headers="headers"
        :items="getProducts"
        :options="options"
        :server-items-length="getTotalProducts"
        @update:options="updatedOptions"
        @update:search="updatedItems"
        @item-selected="itemSelected"
        :loading="loading"
        multiSort
      />
    </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-btn
        class="red white--text"
        @click="deleteProducts"
        :disabled="!hasProductsSelected"
        large
      >
        <v-icon class="mx-3">mdi-delete</v-icon>
        Delete Products
      </v-btn>
      <v-spacer />
      <productTotalInvoice ref="productTotalInvoiceRef" />
    </v-col>
  </v-row>
</template>

<script>
import productTotalInvoice from "./ProductTotalInvoice";
import { calculatorTable } from "./base/";
import { productTableHeadersConst } from "../const";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductTable",
  components: {
    productTotalInvoice,
    calculatorTable,
  },
  data: () => ({
    options: {
      itemsPerPage: 10,
      page: 1,
      sortBy: ["name"],
      sortDesc: [false],
    },
    loading: false,
    serverItemsLength: 0,
    search: null,
    itemsSelected: [],
  }),
  computed: {
    ...mapGetters(["getProducts", "getTotalProducts"]),
    headers() {
      return productTableHeadersConst;
    },
    apiUrlOptions() {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      return {
        _page: page,
        _limit: itemsPerPage,
        _sort: sortBy.toString(),
        _order: sortDesc.map((ele) => (ele ? "desc" : "asc")).toString(),
      };
    },
    filters() {
      return {
        q: this.search,
      };
    },
    productsSelectedIds() {
      return this.itemsSelected.map(({ id }) => id);
    },
    hasProductsSelected() {
      return this.productsSelectedIds.length > 0;
    },
  },
  mounted() {
    this.products();
  },
  watch: {
    getProducts() {
      this.updateProductTable();
    },
  },
  methods: {
    ...mapActions(["fetchProducts", "deleteProduct"]),
    updatedItems(search) {
      this.search = search;
      this.products();
    },
    updatedOptions(options) {
      this.options = options;
      this.products();
    },
    itemSelected(items) {
      this.itemsSelected = items;
    },
    async products() {
      const query = { options: this.apiUrlOptions, filters: this.filters };
      this.loading = true;
      try {
        await this.fetchProducts(query);
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
    async deleteProducts() {
      await this.deleteProduct(this.productsSelectedIds);
      await this.updateProductTable();
      await this.products();
    },
    async updateProductTable() {
      await this.$refs.productTotalInvoiceRef.products();
    },
  },
};
</script>