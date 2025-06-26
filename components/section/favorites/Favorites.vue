<script setup lang="ts">
  import { ref, useTemplateRef, onMounted, watchEffect } from 'vue';
  import { items } from './itemsForStars';

  const selectedItemIndex = ref(0);

  const section = useTemplateRef('section');
  onMounted(() => {
    section.value?.style.setProperty('--item-count', items.length.toString());
  });

  watchEffect(() => {
    section.value?.style.setProperty('--selected-item-index', selectedItemIndex.value.toString());
  });
</script>

<template>
  <section ref="section" class="favorites-section">
    <SectionHeading variant="large" class="favorites-section__heading">
      Get your favorites for free
    </SectionHeading>

    <div class="favorites-section__tabs-container">
      <div class="favorites-section__tabs-wrapper">
        <div class="favorites-section__tabs">
          <label
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
            class="favorites-section__tab-selector"
          >
            <input
              v-model="selectedItemIndex"
              type="radio"
              name="items-for-stars"
              :value="itemIndex"
              class="visually-hidden"
            >
            {{ item.starCount }}
          </label>
        </div>
        <div class="favorites-section__tab-slider-container">
          <div class="favorites-section__tab-slider" />
        </div>
      </div>
    </div>

    <div class="favorites-section__items-wrapper">
      <div
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        class="favorites-section__item"
        :class="{ 'favorites-section__item--selected': itemIndex === selectedItemIndex }"
      >
        <SectionHeading variant="small" class="favorites-section__item-heading">
          {{ item.title }}
        </SectionHeading>
        <img :src="item.image" class="favorites-section__item-image">
        <p class="favorites-section__item-description">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .favorites-section {
    --item-count: 5;
    --selected-item-index: 0;

    padding-top: 3rem;
  }

  .favorites-section__heading {
    margin-bottom: 2rem;
    padding: 0 1.5rem;
  }

  .favorites-section__tabs-container {
    position: relative;
    width: 100%;
    box-shadow: 0 4px 4px rgba(0 0 0 / 7.5%);
    z-index: 1;
  }

  .favorites-section__tabs-wrapper {
    max-width: $max-width-mobile * 1.25;
    margin: 0 auto;
  }

  .favorites-section__tabs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
  }

  .favorites-section__tab-selector {
    text-align: center;
    font-family: $heading-font-family;
    font-size: 1.125rem;
    cursor: pointer;

    position: relative;
    padding: 1rem 0;

    @media (min-width: $max-width-mobile) {
      font-size: 1.25rem;
    }

    &:has(input:focus-visible) {
      outline: 2px solid $color-secondary;
      outline-offset: 4px;
    }

    &::after {
      content: "★";
      color: #cba258;
      font-size: 0.875em;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 5px;
      background-color: #8aeac7;
      opacity: 0;
      transform: scaleX(0.5) translateY(100%);
      transition:
        transform 200ms,
        opacity 200ms;
    }

    &:hover::before {
      transform: scaleX(1) translateY(100%);
      opacity: 1;
    }
  }

  .favorites-section__tab-slider-container {
    height: 5px;
    width: 100%;
  }

  .favorites-section__tab-slider {
    position: relative;
    z-index: 1;
    width: calc(100% / var(--item-count));
    height: 100%;
    background-color: $color-primary;
    transform: translateX(calc(100% * var(--selected-item-index)));
    transition: transform 200ms ease-in-out;
  }

  .favorites-section__items-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    background-color: rgb(222 222 222);
  }

  .favorites-section__item {
    grid-column: 1;
    grid-row: 1;

    display: grid;
    grid-template-areas:
      "image"
      "heading"
      "description";
    gap: 1rem;

    width: 100%;
    max-width: $max-width-mobile * 1.25;
    padding: 2rem 1rem;

    opacity: 0;
    visibility: hidden;
    transition:
      opacity 200ms,
      visibility 200ms;

    @media (min-width: $max-width-mobile) {
      grid-template:
        "image heading" 1fr
        "image description" 1fr / 60% 1fr;
      row-gap: 1.75rem;
    }
  }

  .favorites-section__item--selected {
    opacity: 1;
    visibility: visible;
  }

  .favorites-section__item-image {
    grid-area: image;
    width: 100%;
    max-width: 37.5rem;
    margin: 0 auto;
  }

  .favorites-section__item-heading {
    grid-area: heading;
    text-align: center;
    margin-bottom: 0;

    @media (min-width: $max-width-mobile) {
      text-align: left;
      font-weight: 400;
      font-size: 1.5rem;
      padding: 0;
      place-self: end start;
    }
  }

  .favorites-section__item-description {
    grid-area: description;
    text-align: center;
    max-width: 30em;
    margin: 0 auto;

    @media (min-width: $max-width-mobile) {
      text-align: left;
      font-size: 1rem;
      padding: 0;
      max-width: none;
      place-self: start start;
    }
  }
</style>
