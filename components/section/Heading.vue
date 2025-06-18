<script lang="ts">
  export type Variant = 'small' | 'large';
</script>

<script setup lang="ts">
  const { variant = 'large' } = defineProps<{ variant?: Variant }>();
  const element = {
    large: 'h2',
    small: 'h3',
  } as const satisfies Record<Variant, string>;
</script>

<template>
  <component :is="element[variant]" class="heading" :class="variant">
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
  .heading {
    font-family: $heading-font-family;
  }

  .large {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.75em;

    @media (min-width: $max-width-mobile) {
      font-size: 1.75rem;
    }
  }

  .small {
    font-size: 1rem;

    @media (min-width: $max-width-mobile) {
      font-size: 1.125rem;
    }
  }
</style>
