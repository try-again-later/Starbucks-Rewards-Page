<template>
  <p class="section-sub-heading">
    <slot />
  </p>
</template>

<style lang="scss">
  .section-sub-heading {
    text-align: left;
    margin: 0 0 2rem;
    font-size: 1rem;

    @media (min-width: $max-width-mobile) {
      text-align: center;
      margin-bottom: 4rem;
      font-size: 1.125rem;
    }
  }
</style>
