<script setup lang="ts">
  import { useId, useTemplateRef, onMounted, ref, computed } from 'vue';

  const emit = defineEmits<{
    close: [],
  }>();

  const radioControlsName = `carousel-radio-${useId()}`;

  const slideCount = ref(0);
  const carouselSlides = useTemplateRef('carousel-slides');
  onMounted(() => {
    slideCount.value = carouselSlides.value?.childElementCount ?? 0;
  });

  const currentSlideIndex = ref(1);
  const previousSlide = () => {
    currentSlideIndex.value = Math.max(currentSlideIndex.value - 1, 1);
  };
  const nextSlide = () => {
    currentSlideIndex.value = Math.min(currentSlideIndex.value + 1, slideCount.value);
  };

  const carouselSlidesStyle = computed(() => ({
    translate: `${-(currentSlideIndex.value - 1) * 100}% 0%`,
  }));
</script>

<template>
  <div class="carousel">
    <div ref="carousel-slides" class="carousel__slides-wrapper" :style="carouselSlidesStyle">
      <slot />
    </div>

    <div class="carousel__controls-wrapper">
      <CarouselControlButton
        direction="previous"
        :hidden="currentSlideIndex == 1"
        class="carousel__control-button-previous"
        @click="previousSlide"
      />

      <div class="carousel__control-radios-wrapper">
        <label
          v-for="slideIndex in slideCount"
          :key="slideIndex"
          class="carousel__control-radio-label"
        >
          <input
            v-model="currentSlideIndex"
            type="radio"
            :name="radioControlsName"
            :value="slideIndex"
            class="visually-hidden"
          >
        </label>
      </div>

      <CarouselControlButton
        direction="next"
        :hidden="currentSlideIndex == slideCount"
        class="carousel__control-button-next"
        @click="nextSlide"
      />

      <Button
        variant="light"
        class="carousel__ok-button"
        :class="{ 'carousel__ok-button--hidden': currentSlideIndex != slideCount }"
        @click="emit('close')"
      >
        Ok
      </Button>
    </div>
  </div>
</template>

<style lang="scss">
  .carousel {
    overflow-x: hidden;
  }

  .carousel__slides-wrapper {
    display: flex;
    margin-bottom: 1rem;
    transition: translate 300ms;

    @media (min-width: $max-width-mobile) {
      margin-bottom: 2rem;
    }
  }

  .carousel__controls-wrapper {
    display: grid;
    grid-template-columns: 2fr auto 3fr auto 2fr;
    grid-template-areas: "_ previous radios next ok";
    place-items: center;
  }

  .carousel__control-button-previous {
    grid-area: previous;
  }

  .carousel__control-button-next {
    grid-area: next;
  }

  .carousel__control-radios-wrapper {
    grid-area: radios;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .carousel__ok-button {
    grid-area: ok;
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

  .carousel__ok-button--hidden {
    opacity: 0;
    pointer-events: none;
  }

  .carousel__ok-button--hidden:focus-visible {
    opacity: 1;
    pointer-events: auto;
  }

  .carousel__control-radio-label {
    display: block;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;

    cursor: pointer;
    background-color: $color-disabled;
    transition: transform 100ms;
    transform: scale(0.85)
  }

  .carousel__control-radio-label:focus-visible {
    outline: 2px solid $color-secondary;
  }

  .carousel__control-radio-label:hover {
    transform: scale(1.15);
  }

  .carousel__control-radio-label:has(input:checked) {
    background-color: $color-secondary;
    transform: scale(1);
  }

  .carousel__control-radio-label:has(input:focus-visible) {
    outline: 2px solid $color-secondary;
    outline-offset: 2px;
  }

  .carousel__control-radio-label:hover:has(input:checked) {
    transform: scale(1.15);
  }
</style>
