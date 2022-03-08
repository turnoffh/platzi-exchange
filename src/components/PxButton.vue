<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
  >
    <beat-loader
      v-show="loading"
      :loading="loading"
      color="#68d391"
      :size="8"
    />
    <div v-show="!loading">
      <p>
        <slot />
      </p>
    </div>
  </button>
</template>

<script>
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
export default {
  name: "PxButton",

  components: {
    BeatLoader,
  },

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    buttonClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
