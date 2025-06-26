<script lang="ts">
  export type Variant = 'dark' | 'primary';
</script>

<script setup lang="ts">
  const { variant = 'primary' } = defineProps<{ variant?: Variant }>();
</script>

<template>
  <a class="link" :class="`${variant}-link`">
    <slot />
  </a>
</template>

<style lang="scss">
  %link {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }

    &[href^="https://"]::after {
      content: url("~/assets/icons/external-link.svg");
      display: inline-block;
      width: 1em;
      height: 1em;
      vertical-align: middle;
    }
  }

  .dark-link {
    @extend %link;

    color: $color-dark;

    &:active {
      color: $color-dark;
    }
  }

  .primary-link {
    @extend %link;

    color: $color-primary;

    &:active {
      color: $color-primary;
    }
  }
</style>
