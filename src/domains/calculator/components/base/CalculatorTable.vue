<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="items"
    :server-items-length="serverItemsLength"
    :multi-sort="multiSort"
    :single-select="singleSelect"
    :options.sync="optionsLocal"
    @update:options="$emit('update:options', optionsLocal)"
    @input="$emit('item-selected', selected)"
    show-select
    selectable-key="id"
    item-key="id"
    class="elevation-1"
    :loading="loading"
    loading-text="Loading..."
  >
    <template #top>
      <v-row class="px-4 py-1 blue lighten-5 ma-0 pa-0">
        <v-col cols="12" sm="4" class="d-flex align-center">
          <span class="title">
            <v-icon large>mdi-cart</v-icon>
            {{ title }}
          </span>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="mt-2 search-input elevation-0"
            dense
            outlined
            rounded
            clearable
            @input="$emit('update:search', search)"
            data-cy="search-product-field"
          />
        </v-col>
      </v-row>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "calculatorTable",
  props: {
    title: {
      type: String,
      default: "Products List",
    },
    items: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    serverItemsLength: {
      type: Number,
      default: 0,
    },
    singleSelect: {
      type: Boolean,
      default: false,
    },
    multiSort: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      optionsLocal: this.options,
      search: null,
      selected: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  width: 100%;
  @media screen and (min-width: 992px) {
    max-width: 20rem;
  }
}
</style>
