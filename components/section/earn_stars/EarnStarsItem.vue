<script setup lang="ts">
  const { image } = defineProps<{
    image: string;
  }>();
</script>

<template>
  <li class="earn-stars-section__item">
    <img :src="image" class="earn-stars-section__item-image" />
    <p class="earn-stars-section__item-heading">
      <slot name="heading"></slot>
    </p>
    <p class="earn-stars-section__item-description">
      <slot name="description"></slot>
    </p>
  </li>
</template>

<style lang="scss">
  .earn-stars-section__item {
    flex: 1;
    flex-basis: $max-width-mobile * 0.5;

    display: grid;
    grid-template:
      "image heading" auto
      "image description" 1fr
      / 8rem 1fr;
    gap: 1rem 2rem;
    max-width: $max-width-mobile * 0.65;
  }

  .earn-stars-section__item-image {
    width: 100%;
    height: auto;

    grid-area: image;
  }

  .earn-stars-section__item-heading {
    font-weight: 700;
    font-size: 1rem;

    grid-area: heading;
  }

  .earn-stars-section__item-description {
    text-align: justify;

    grid-area: description;
  }
</style>
