<script setup lang="ts">
import Test from "./Test.vue";
import { ref } from "vue";

const value = ref(1);
</script>

<template>
  <h2>PrimeVue Issue Template</h2>

  <Test v-model="value" />
</template>