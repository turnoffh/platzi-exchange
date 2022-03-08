<template>
  <div>
    <ring-loader :loading="isLoading" :color="'#68d391'"></ring-loader>
    <br />
    <px-assets-table v-if="!isLoading" v-bind:assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/api";
import RingLoader from "vue-spinner/src/RingLoader.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: {
    PxAssetsTable,
    RingLoader,
  },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
