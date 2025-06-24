<script lang="ts">
  export type Variant = 'link' | 'open-sub-menu' | 'close-sub-menu';
</script>

<script setup lang="ts">
  import ArrowLeft from '~/assets/icons/arrow-left.svg?component';
  import ArrowRight from '~/assets/icons/arrow-right.svg?component';

  type Props = {
    variant?: Variant;
  };
  const { variant = 'link' } = defineProps<Props>();
</script>

<template>
  <component
    :is="variant === 'link' ? 'a' : 'button'"
    class="button"
    :class="{'darker': variant === 'close-sub-menu'}"
  >
    <ArrowLeft v-if="variant === 'close-sub-menu'" class="icon" />
    <span class="title" :class="{'centered': variant === 'close-sub-menu'}">
      <slot></slot>
    </span>
    <ArrowRight v-if="variant === 'open-sub-menu'" class="icon" />
  </component>
</template>

<style scoped lang="scss">
  .button {
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
  }

  .button:hover {
    text-decoration: underline;
  }

  .button.darker {
    background-color: $color-light-darken;
  }

  .title {
    flex: 1;
  }

  .title.centered {
    text-align: center;
  }
</style>
