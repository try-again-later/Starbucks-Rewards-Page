<script lang="ts">
  export type Variant = 'text' | 'dark' | 'light' | 'primary' | 'secondary';
</script>

<script setup lang="ts">
  type Props = {
    variant?: Variant;
    isLink?: boolean;
  };
  const { variant = 'text', isLink = false } = defineProps<Props>();
</script>

<template>
  <component :is="isLink ? 'a' : 'button'" :class="`${variant}-button`">
    <slot name="prepend" />
    <slot />
  </component>
</template>

<style lang="scss">
  .button {
    font-family: $body-font-family;
    font-size: 0.875rem;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25em;

    text-decoration: none;
    border-radius: 1.5em;
    padding: 0.5em 1em;
    border: 1px solid transparent;

    color: $color-dark;
    background-color: transparent;
    cursor: pointer;
    transition:
      background-color 200ms,
      color 200ms,
      transform 100ms;

    @media (min-width: $max-width-mobile) {
      font-size: 1rem;
    }

    &:focus {
      outline-offset: 0.5em;
    }

    &:active {
      transform: scale(0.9);
    }
  }

  .text-button {
    @extend .button;

    font-size: 1rem;
    padding: 0;

    &:hover {
      color: $color-primary;
    }
  }

  .dark-button {
    @extend .button;

    background-color: $color-dark;
    color: $color-light;

    &:hover {
      background-color: $color-dark-lighten;
    }
  }

  .light-button {
    @extend .button;

    border-color: $color-neutral;
    color: $color-neutral;
    background-color: $color-light;

    &:hover {
      background-color: $color-light-darken;
    }
  }

  .primary-button {
    @extend .button;

    background-color: $color-primary;
    color: $color-light;

    &:hover {
      background-color: $color-primary-lighten;
    }
  }

  .secondary-button {
    @extend .button;

    background-color: $color-secondary;
    border-color: $color-light;
    color: $color-light;

    &:hover {
      background-color: $color-secondary-lighten;
    }
  }
</style>
