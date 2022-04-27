<template>
  <v-container class="calc-container">
    <router-view />
  </v-container>
</template>

<script>
export default {
  name: "CalculationModule",
};
</script>
<style lang="scss" scoped>
.calc-container {
  padding: 20px;
  background: #fdfdfd;
  min-height: 100%;
}
</style>
