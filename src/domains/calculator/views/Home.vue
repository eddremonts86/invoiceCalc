<template>
  <v-row>
    <v-col cols="12">
      <h1>Invoice Calculator</h1>
    </v-col>
    <v-col cols="12"
      ><product-form @update-parent="updateProductTable"
    /></v-col>
    <v-col cols="12"><productTable ref="productTableRef" /></v-col>
  </v-row>
</template>

<script>
import { productForm, productTable } from "../components";
export default {
  name: "CalculationHome",
  components: { productForm, productTable },
  methods: {
    updateProductTable() {
      this.$refs.productTableRef.products();
    },
  },
};
</script>
