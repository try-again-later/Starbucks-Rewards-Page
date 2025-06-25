<template>
  <ul class="getting-started-section__list">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
  .getting-started-section__list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    counter-reset: item 0;
    max-width: $max-width-mobile * 0.75;

    @media (min-width: $max-width-mobile) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax($max-width-mobile * 0.25, 1fr));
      grid-template-rows: repeat(3, auto);
      justify-content: center;
      gap: 0 3rem;
      margin: 0 auto;

      max-width: $max-width-mobile * 1.25;
    }
  }
</style>
