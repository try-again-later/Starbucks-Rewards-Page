<template>
  <p class="section-sub-heading">
    <slot></slot>
  </p>
</template>

<style lang="scss">
  .section-sub-heading {
    text-align: left;
    margin: 0 0 2rem 0;
    font-size: 1rem;
    max-width: $max-width-mobile * 0.75;

    @media (min-width: $max-width-mobile) {
      text-align: center;
      margin: 0 auto 2rem auto;
      font-size: 1.125rem;
    }
  }
</style>
