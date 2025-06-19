<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    counter-reset: item 0;
    max-width: 35rem;

    @media (min-width: $max-width-mobile) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
      grid-template-rows: repeat(3, auto);
      justify-content: center;
      gap: 0 3rem;
      margin: 0 auto;

      max-width: $max-width-mobile + 10rem;
    }
  }
</style>
