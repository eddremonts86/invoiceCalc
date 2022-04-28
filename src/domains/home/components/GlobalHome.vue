<template>
  <v-container class="d-flex justify-center align-center home-container">
    <v-row>
      <v-col cols="12" md="6">
        <h1>Invoice Calculator</h1>
        <h3 class="my-5">
          As a small business owner, you’re busy invoicing and doing everything
          you can to please your clients. From sending sales invoices, to
          customer service to managing business finances, you have your hands
          full. That’s why you deserve an invoice generator app that puts you on
          the fast track to getting paid, the right way.
        </h3>
        <v-btn
          class="my-8 primary"
          large
          role="link"
          to="/calculator"
          data-cy="invoice-calculator-button"
        >
          <v-icon>mdi-cart</v-icon>Invoice Calc
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
<style lang="scss" scoped>
.home-container {
  padding: 20px;
  height: 100%;
  h1 {
    font-size: 5rem;
    @media screen and (max-width: 600px) {
      font-size: 3rem;
    }
  }
}
</style>
