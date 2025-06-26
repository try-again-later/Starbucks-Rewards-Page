<script lang="ts">
  import ArrowLeft from '~/assets/icons/arrow-left.svg?component';
  import ArrowRight from '~/assets/icons/arrow-right.svg?component';

  export type Variant = 'link' | 'open-sub-menu' | 'close-sub-menu';
</script>

<script setup lang="ts">
  type Props = {
    variant?: Variant;
  };
  const { variant = 'link' } = defineProps<Props>();
</script>

<template>
  <component
    :is="variant === 'link' ? 'a' : 'button'"
    class="header-menu-button"
    :class="{ 'header-menu-button--darker': variant === 'close-sub-menu' }"
  >
    <ArrowLeft v-if="variant === 'close-sub-menu'" class="header-menu-button__icon" />
    <span
      class="header-menu-button__title"
      :class="{'header-menu-button__title--centered': variant === 'close-sub-menu'}"
    >
      <slot />
    </span>
    <ArrowRight v-if="variant === 'open-sub-menu'" class="header-menu-button__icon" />
  </component>
</template>

<style lang="scss">
  .header-menu-button {
    font-family: $heading-font-family;
    font-size: 1.125rem;
    text-decoration: none;
    color: $color-muted;
    white-space: nowrap;

    display: flex;
    width: 100%;
    padding: 1rem 2rem;
    align-items: center;

    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: left;

    &:hover {
      text-decoration: underline;
    }
  }

  .header-menu-button--darker {
    background-color: $color-light-darken;
  }

  .header-menu-button__icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .header-menu-button__title {
    flex: 1;
  }

  .header-menu-button__title--centered {
    text-align: center;
  }
</style>
