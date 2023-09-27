<script setup lang="ts">
import Dropdown, { type DropdownProps } from "primevue/dropdown"

const props = defineProps<DropdownProps>()

const options = [
  { id: 1, name: "First" },
  { id: 2, name: "Second" },
]
</script>

<template>
  <Dropdown
    v-bind="props"
    :options="options"
    option-value="id"
    option-label="name"
  />
</template>