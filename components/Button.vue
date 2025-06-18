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
  <component
    :is="isLink ? 'a' : 'button'"
    class="button"
    :class="{
      text: variant === 'text',
      dark: variant === 'dark',
      light: variant === 'light',
      primary: variant === 'primary',
      secondary: variant === 'secondary',
    }"
  >
    <slot name="prepend"></slot>
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
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
  }

  .button:focus {
    outline-offset: 0.5em;
  }

  .button:active {
    transform: scale(0.9);
  }

  .button.text {
    font-size: 1rem;
    padding: 0;
  }

  .button.text:hover {
    color: $color-primary;
  }

  .button.dark {
    background-color: $color-dark;
    color: $color-light;
  }

  .button.dark:hover {
    background-color: $color-dark-lighten;
  }

  .button.light {
    border-color: $color-neutral;
    color: $color-neutral;
    background-color: $color-light;
  }

  .button.light:hover {
    background-color: $color-light-darken;
  }

  .button.primary {
    background-color: $color-primary;
    color: $color-light;
  }

  .button.primary:hover {
    background-color: $color-primary-lighten;
  }

  .button.secondary {
    background-color: $color-secondary;
    border-color: $color-light;
    color: $color-light;
  }

  .button.secondary:hover {
    background-color: $color-secondary-lighten;
  }
</style>
