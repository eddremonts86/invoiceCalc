<template>
  <v-form ref="productFormRef" v-model="valid" lazy-validation>
    <v-row class="d-flex align-center">
      <v-col cols="12" md="6" sm="12">
        <v-text-field
          label="Product name"
          v-model="productName"
          outlined
          hide-details
          dense
          clearable
          required
          :rules="requiredRule"
        />
      </v-col>
      <v-col cols="12" md="2" sm="6">
        <v-text-field
          label="Price"
          v-model="price"
          outlined
          hide-details
          dense
          clearable
          required
          type="number"
          min-number="0"
          :rules="requiredRule"
        />
      </v-col>
      <v-col cols="12" md="2" sm="6">
        <v-text-field
          label="Qty"
          v-model="quantity"
          hide-details
          outlined
          dense
          clearable
          required
          type="number"
          :rules="requiredRule"
        />
      </v-col>
      <v-col cols="12" md="2" sm="12">
        <v-btn
          class="primary"
          block
          @click="addProduct"
          :disabled="!isAllowedToSave"
        >
          <v-icon class="mx-3">mdi-cart-plus</v-icon>
          Add
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductForm",
  data() {
    return {
      productName: null,
      price: null,
      quantity: null,
      valid: false,
      requiredRule: [(v) => !!v || "This field is required"],
    };
  },
  computed: {
    isAllowedToSave() {
      return Object.values(this.$data).every((ele) => ele) && this.valid;
    },
  },
  methods: {
    ...mapActions(["createProduct"]),
    async addProduct() {
      if (this.valid) {
        try {
          await this.createProduct({
            name: this.productName,
            price: +this.price,
            quantity: +this.quantity,
            total: this.price * this.quantity,
          });
          this.reset();
          this.$emit("update-parent");
        } catch (error) {
          console.log(error);
        }
      }
    },
    reset() {
      this.$refs.productFormRef.reset();
    },
  },
};
</script>

<style></style>
