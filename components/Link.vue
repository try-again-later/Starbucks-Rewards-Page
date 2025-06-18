<script lang="ts">
  export type Variant = 'dark' | 'primary';
</script>

<script setup lang="ts">
  const { variant = 'primary' } = defineProps<{ variant?: Variant }>();
</script>

<template>
  <a class="link" :class="variant">
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
  .link {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }

    &.dark {
      color: $color-dark;
      &:active {
        color: $color-dark;
      }
    }

    &.primary {
      color: $color-primary;
      &:active {
        color: $color-primary;
      }
    }
  }
</style>
