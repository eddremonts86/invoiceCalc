<template>
  <div class="d-flex align-center">
    <v-progress-circular
      indeterminate
      color="primary"
      v-if="loading"
    ></v-progress-circular>
    <span v-else>
      Total : <b>${{ total }}</b>
    </span>
  </div>
</template>

<script>
import { fetchProducts } from "../api";

export default {
  name: "ProductTotalInvoice",
  data: function () {
    return {
      total: 0,
      loading: false,
    };
  },
  created() {
    this.products();
  },
  methods: {
    async products() {
      this.loading = true;
      try {
        const { data } = await fetchProducts();
        this.total = data.reduce((acc, ele) => acc + ele.total, 0);
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
