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
  <section class="section" ref="section">
    <SectionHeading variant="large" class="heading">Get your favorites for free</SectionHeading>

    <div class="tab-list-container">
      <div class="tab-list-wrapper">
        <div class="tab-list">
          <label v-for="(item, itemIndex) in items" class="tab-selector">
            <input
              type="radio"
              name="items-for-stars"
              :value="itemIndex"
              class="visually-hidden"
              v-model="selectedItemIndex"
            />
            {{ item.starCount }}
          </label>
        </div>
        <div class="slider-container">
          <div class="slider"></div>
        </div>
      </div>
    </div>

    <div class="tab-items-wrapper">
      <div
        class="tab-item"
        v-for="(item, itemIndex) in items"
        :class="{ 'tab-item-selected': itemIndex === selectedItemIndex }"
      >
        <SectionHeading variant="small" class="tab-item-heading">{{ item.title }}</SectionHeading>
        <img :src="item.image" class="tab-item-image" />
        <p class="tab-item-description">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    --item-count: 5;
    --selected-item-index: 0;

    padding-top: 3rem;
  }

  .heading {
    margin-bottom: 2rem;
    padding: 0 1.5rem;
  }

  .tab-list-container {
    position: relative;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.075);
    z-index: 1;
  }

  .tab-list-wrapper {
    max-width: $max-width-mobile * 1.25;
    margin: 0 auto;
  }

  .tab-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
  }

  .tab-selector {
    text-align: center;
    font-family: $heading-font-family;
    font-size: 1.125rem;
    cursor: pointer;

    position: relative;
    padding: 1rem 0;

    @media (min-width: $max-width-mobile) {
      font-size: 1.25rem;
    }
  }

  .tab-selector:has(input:focus-visible) {
    outline: 2px solid $color-secondary;
    outline-offset: 4px;
  }

  .tab-selector::after {
    content: "★";
    color: #cba258;
    font-size: 0.875em;
  }

  .tab-selector::before {
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

  .tab-selector:hover::before {
    transform: scaleX(1) translateY(100%);
    opacity: 1;
  }

  .slider-container {
    height: 5px;
    width: 100%;
  }

  .slider {
    position: relative;
    z-index: 1;
    width: calc(100% / var(--item-count));
    height: 100%;
    background-color: $color-primary;
    transform: translateX(calc(100% * var(--selected-item-index)));
    transition: transform 200ms ease-in-out;
  }

  .tab-items-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    background-color: rgb(222, 222, 222);
  }

  .tab-item {
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
      grid-template-areas:
        "image heading"
        "image description";
      row-gap: 1.75rem;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 60% 1fr;
    }
  }

  .tab-item-selected {
    opacity: 1;
    visibility: visible;
  }

  .tab-item-image {
    grid-area: image;
    width: 100%;
    max-width: 37.5rem;
    margin: 0 auto;
  }

  .tab-item-heading {
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

  .tab-item-description {
    grid-area: description;
    text-align: center;
    max-width: 30em;
    margin: 0 auto;

    @media (min-width: $max-width-mobile) {
      text-align: left;
      font-size: 1rem;
      padding: 0;
      max-width: auto;
      place-self: start start;
    }
  }
</style>
