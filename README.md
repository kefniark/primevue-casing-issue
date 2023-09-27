## Primevue Casing Issue

### Description

Reproduce the issue with Primevue `aria-label` and `aria-labelledby`.

cf: https://github.com/primefaces/primevue/issues/4511

### Reproduce

0. Clone this repo
1. Install `yarn` / `npm install`
2. Build `yarn build` or `npm run build`
3. Boom Crash
4. You can take a look at [./src/Test.vue](./src/Test.vue) it's modern valid vue syntax

This Repository is based on vitejs [vue-ts template](https://vitejs.dev/guide/#trying-vite-online)

### Problem

The problem seem to be a mix of two things:
* Bad Primevue casing (and typing)
* Using recent Vue `type-based declaration` and not `runtime declaration`
```ts
defineProps<Generic>() // type-based declaration
defineProps({}) // runtime declaration
```

So basically when trying to extend a primevue component and reusing primevue types, properties like `aria-label` throw an error because they are not camelCase (and contain a `-`).

Based on [vue documentation](https://vuejs.org/guide/components/props.html#prop-passing-details), the casing is clear and non ambiguous:
* We declare long prop names using **camelCase**
* When passing props to a child component, the convention is using **kebab-case** in all cases to align with HTML attributes
* We use **PascalCase** for component tags

### Workaround
A dirty workaround consist to ignore these two properties with `Omit<Component, 'aria-label' | 'aria-labelledby'>`.

```ts
import Slider, { type SliderProps } from 'primevue/slider'

export interface Props extends Omit<SliderProps, 'aria-label' | 'aria-labelledby'> {
  min: number
  max: number
}

const props = defineProps<Props>()
```

This solve any compilation issue, but this is not future proof and doesn't solve the real problem.

### Actionable

* Fix an issue with primevue props casing / typings
* Fix an issue with `@vitejs/plugin-vue`, it shouldn't die this way and workaround such issue
