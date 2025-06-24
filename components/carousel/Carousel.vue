<script setup lang="ts">
  import { useId, useTemplateRef, onMounted, ref, computed } from 'vue';
  import ArrowLeft from '~/assets/icons/arrow-left.svg?component';
  import ArrowRight from '~/assets/icons/arrow-right.svg?component';

  const emit = defineEmits<{
    close: [],
  }>();

  const radioInputsName = useId();

  const itemCount = ref(0);
  const carouselItems = useTemplateRef('carousel-items');
  onMounted(() => {
    itemCount.value = carouselItems.value?.childElementCount ?? 0;
  });

  const selectedItemIndex = ref(1);
  const previousItem = () => {
    selectedItemIndex.value = Math.max(selectedItemIndex.value - 1, 1);
  };
  const nextItem = () => {
    selectedItemIndex.value = Math.min(selectedItemIndex.value + 1, itemCount.value);
  };

  const carouselItemsStyle = computed(() => ({
    translate: `${-(selectedItemIndex.value - 1) * 100}% 0%`,
  }));
</script>

<template>
  <div class="carousel-items-wrapper" tabindex="-1">
    <div class="carousel-items" ref="carousel-items" :style="carouselItemsStyle">
      <slot></slot>
    </div>
  </div>

  <div class="carousel-actions">
    <button
      @click="previousItem"
      title="Previous item"
      class="carousel-button-previous carousel-button"
      :class="{ 'carousel-button-visible': selectedItemIndex > 1 }"
    >
      <ArrowLeft />
    </button>

    <div class="carousel-radios">
      <label v-for="itemIndex in itemCount" class="carousel-radio">
        <input
          type="radio"
          :name="`carousel-radio-${radioInputsName}`"
          :value="itemIndex"
          class="visually-hidden"
          v-model="selectedItemIndex"
        />
      </label>
    </div>

    <button
      @click="nextItem"
      title="Next item"
      class="carousel-button-next carousel-button"
      :class="{ 'carousel-button-visible': selectedItemIndex < itemCount }"
    >
      <ArrowRight />
    </button>

    <Button
      @click="emit('close')"
      variant="light"
      class="carousel-ok-button"
      :class="{ 'carousel-ok-button-visible': selectedItemIndex == itemCount }"
    >
      Ok
    </Button>
  </div>
</template>

<style scoped lang="scss">
  .carousel-items-wrapper {
    overflow-x: hidden;
    margin-bottom: 1rem;
  }

  .carousel-items {
    display: flex;
    transition: translate 300ms;
  }

  .carousel-actions {
    display: grid;
    grid-template-columns: 2fr auto 3fr auto 2fr;
    grid-template-areas: "_ previous radios next ok";
    align-items: center;
    justify-items: center;
  }

  .carousel-button {
    position: relative;
    aspect-ratio: 1 / 1;

    opacity: 0;
    pointer-events: none;
    background-color: transparent;
    border: none;
  }

  .carousel-button::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-light-darken;
    border-radius: 50%;
    opacity: 0;
    transform: scale(0.4);
    transition:
      opacity 200ms,
      transform 200ms,
      background-color 500ms;
  }

  .carousel-button:active::after {
    background-color: $color-disabled;
  }

  .carousel-button:hover::after {
    opacity: 1;
    transform: scale(1.25);
  }

  .carousel-button-visible,
  .carousel-button:focus-visible {
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
  }

  .carousel-button-previous {
    grid-area: previous;
  }

  .carousel-button-next {
    grid-area: next;
  }

  .carousel-radios {
    grid-area: radios;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .carousel-ok-button {
    grid-area: ok;
    opacity: 0;
    pointer-events: none;
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

  .carousel-ok-button-visible,
  .carousel-ok-button:focus-visible {
    opacity: 1;
    pointer-events: auto;
  }

  .carousel-radio {
    display: block;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;

    cursor: pointer;
    background-color: $color-disabled;
    transition: transform 100ms;
    transform: scale(0.85)
  }

  .carousel-radio:focus-visible {
    outline: 2px solid $color-secondary;
  }

  .carousel-radio:has(input:checked) {
    background-color: $color-secondary;
    transform: scale(1);
  }

  .carousel-radio:hover,
  .carousel-radio:hover:has(input:checked) {
    transform: scale(1.15);
  }

  .carousel-radio:has(input:focus-visible) {
    outline: 2px solid $color-secondary;
    outline-offset: 2px;
  }
</style>
