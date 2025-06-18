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
    margin: 0 auto;

    @media (min-width: $max-width-mobile) {
      flex-direction: row;
      justify-content: center;
      gap: 4rem;

      max-width: $max-width-desktop;
    }
  }
</style>
