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
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;

    display: flex;
    align-items: center;
    gap: 0.25em;

    text-decoration: none;
    border: 1px solid;
    border-radius: 1.5em;
    padding: 0.5em 1em;

    color: black;
    border-color: transparent;
    background-color: transparent;
    cursor: pointer;
    transition:
      background-color 200ms,
      color 200ms,
      transform 100ms;
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
    color: #00754a;
  }

  .button.text:focus {
    outline-offset: 1em;
  }

  .button.dark {
    background-color: black;
    color: white;
    border-color: black;
  }

  .button.dark:hover {
    background-color: #4c4c4c;
    border-color: #4c4c4c;
  }

  .button.light {
    border-color: #333;
    color: #333;
    background-color: white;
  }

  .button.light:hover {
    background-color: #f0f0f0;
  }

  .button.primary {
    background-color: #00754a;
    border-color: #00754a;
    color: white;
  }

  .button.primary:hover {
    background-color: #148159;
    border-color: #148159;
  }

  .button.secondary {
    background-color: #1e3932;
    border-color: white;
    color: white;
  }

  .button.secondary:hover {
    background-color: #39514b;
  }
</style>
