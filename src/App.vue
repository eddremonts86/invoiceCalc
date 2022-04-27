<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <div class="d-flex align-center">
        <v-icon large>mdi-cart</v-icon> Invoice Calculator
      </div>
      <v-spacer></v-spacer>
      <router-link to="/" class="link">Home</router-link
      ><router-link to="/calculator" class="link">Invoice Calc</router-link>
    </v-app-bar>

    <v-main class="blue lighten-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
.link {
  color: #fff;
  text-decoration: none;
  margin: 5px 10px;
}
</style>
