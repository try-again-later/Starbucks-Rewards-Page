<template>
  <li class="list-item">
    <SectionHeading variant="small" class="heading">
      <slot name="heading"></slot>
    </SectionHeading>

    <p class="content">
      <slot name="content"></slot>
    </p>
  </li>
</template>

<style scoped lang="scss">
  $list-counter-color: #00a862;

  .list-item {
    display: grid;
    grid-template-areas:
      "counter heading"
      "counter content";
    grid-template-columns: min-content auto;
    gap: 0.5rem 1rem;

    flex: 1;

    counter-increment: item;

    .heading {
      grid-area: heading
    }

    .content {
      grid-area: content;
    }

    @media (min-width: $max-width-mobile) {
      text-align: center;

      grid-template-areas:
        "counter"
        "heading"
        "content";
      grid-template-columns: auto;
      justify-items: center;
      gap: 1.5rem;

      max-width: 20rem;
    }
  }

  .list-item::before {
    font-size: 1.5rem;
    font-weight: 700;
    color: $list-counter-color;

    content: counter(item) " ";
    grid-area: counter;
    place-self: start center;
    min-width: 2rem;

    display: grid;
    place-items: center;
    width: 2.5rem;
    margin-top: 0.25rem;
    aspect-ratio: 1 / 1;
    border: 2px solid $list-counter-color;
    border-radius: 50%;
  }
</style>
