<script lang="ts">
  import ArrowLeft from '~/assets/icons/arrow-left.svg?component';
  import ArrowRight from '~/assets/icons/arrow-right.svg?component';

  export type Direction = 'previous' | 'next';
</script>

<script setup lang="ts">
  const { direction, hidden } = defineProps<{
    direction: Direction;
    hidden: boolean;
  }>();
</script>

<template>
  <button
    :title="`${direction == 'previous' ? 'Previous' : 'Next'} item`"
    class="carousel-control-button"
    :class="{ 'carousel-control-button--hidden': hidden }"
  >
    <ArrowLeft v-if="direction == 'previous'" class="carousel-control-button__icon" />
    <ArrowRight v-else-if="direction == 'next'" class="carousel-control-button__icon" />
  </button>
</template>

<style lang="scss">
  .carousel-control-button {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    color: $color-secondary;
    background-color: transparent;

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-light-darken;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0.4);
      transition:
        opacity 200ms,
        transform 200ms,
        background-color 200ms;
    }

    &:active::after {
      background-color: $color-disabled;
    }

    &:hover::after {
      opacity: 1;
      transform: scale(1.25);
    }
  }

  .carousel-control-button--hidden {
    opacity: 0;
    pointer-events: none;

    &:focus-visible {
      opacity: 1;
      pointer-events: auto;
    }
  }
</style>
