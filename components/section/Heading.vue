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
  <component :is="element[variant]" class="section-heading" :class="`section-heading--${variant}`">
    <slot></slot>
  </component>
</template>

<style lang="scss">
  .section-heading {
    font-family: $heading-font-family;
    text-align: left;
  }

  .section-heading--large {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75em;

    @media (min-width: $max-width-mobile) {
      text-align: center;
      font-size: 1.75rem;
    }
  }

  .section-heading--small {
    font-size: 1rem;

    @media (min-width: $max-width-mobile) {
      text-align: center;
      font-size: 1.125rem;
    }
  }
</style>
