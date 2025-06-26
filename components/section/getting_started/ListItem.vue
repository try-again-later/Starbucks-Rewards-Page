<template>
  <li class="getting-started-section__list-item">
    <SectionHeading variant="small" class="getting-started-section__list-item-heading">
      <slot name="heading" />
    </SectionHeading>

    <p class="getting-started-section__list-item-content">
      <slot name="content" />
    </p>
  </li>
</template>

<style lang="scss">
  $list-counter-color: #00a862;

  .getting-started-section__list-item {
    display: grid;
    grid-template-areas:
      "counter heading"
      "counter content";
    grid-template-columns: min-content auto;
    gap: 0.5rem 1rem;

    flex: 1;

    counter-increment: item;

    @media (min-width: $max-width-mobile) {
      text-align: center;

      grid-template-rows: subgrid;
      grid-row-end: span 3;
      grid-template-columns: auto;
      gap: 1rem;
      align-items: baseline;

      max-width: 20rem;
    }

    &::before {
      font-size: 1.5rem;
      font-weight: 700;
      color: $list-counter-color;

      content: counter(item) " ";
      grid-column: 1;
      grid-row: 1 / span 2;
      place-self: start center;
      min-width: 2rem;

      display: grid;
      place-items: center;
      width: 2.5rem;
      margin-top: 0.25rem;
      aspect-ratio: 1 / 1;
      border: 2px solid $list-counter-color;
      border-radius: 50%;

      @media (min-width: $max-width-mobile) {
        grid-column: 1;
        grid-row: 1;
      }
    }
  }

  .getting-started-section__list-item-heading {
    grid-column: 2;
    grid-row: 1;

    @media (min-width: $max-width-mobile) {
      grid-column: 1;
      grid-row: 2;
    }
  }

  .getting-started-section__list-item-content {
    grid-column: 2;
    grid-row: 2;

    @media (min-width: $max-width-mobile) {
      grid-column: 1;
      grid-row: 3;
    }
  }
</style>
