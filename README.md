## Primevue Reproduce Issue

### Description

Reproduce the issue with Primevue `aria-label` and `aria-labelledby`.

### Reproduce

1. Install `yarn` / `npm install`
2. Build `yarn build` or `npm run build`
3. Boom Crash

### Problem Original

The problem seem to be a mix of two things:
* Bad Primevue typing
* Recent Vue `type-based declaration` and not `runtime declaration`
```ts
defineProps<Generic>() // type-based declaration
defineProps({}) // runtime declaration
```

So basically when trying to extend a primevue component and reusing primevue type, properties like `aria-label` throw an error because they are not camelCase (and contain a `-`).

Based on [vue documentation](https://vuejs.org/guide/components/props.html#prop-passing-details), the casing is clear and non ambiguous:
* We declare long prop names using **camelCase**
* When passing props to a child component, the convention is using **kebab-case** in all cases to align with HTML attributes
* We use **PascalCase** for component tags
