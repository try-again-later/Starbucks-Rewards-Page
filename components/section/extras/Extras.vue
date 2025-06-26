<script setup lang="ts">
  import { ref } from 'vue';
  import extrasItems from './items';
  import Cross from '~/assets/icons/cross.svg?component';

  const modalsOpened = ref<boolean[]>(new Array(extrasItems.length).fill(false));
</script>

<template>
  <section class="extras-section">
    <SectionHeading variant="large">Endless extras</SectionHeading>
    <SectionSubHeading>
      Joining Starbucks<sup>&reg;</sup> Rewards means unlocking access to exclusive benefits.
      Say hello to easy ordering, tasty Rewards and&mdash;yes, free coffee.
    </SectionSubHeading>

    <ul class="extras-section__list">
      <li v-for="(item, itemIndex) in extrasItems" :key="itemIndex" class="extras-item">
        <SectionHeading variant="small" class="extras-item__heading">
          {{ item.title }}
        </SectionHeading>
        <p class="extras-item__description">{{ item.description }}</p>

        <SectionExtrasModal v-model:opened="modalsOpened[itemIndex]">
          <template #button="{ open }">
            <Button variant="primary" class="extras-item__learn-more-button" @click="open">
              Learn more
            </Button>
          </template>

          <template #modal="{ close }">
            <div class="extras-section-modal">
              <button
                class="extras-section-modal__close-button"
                title="Close"
                @click="close"
              >
                <Cross />
              </button>

              <Carousel tabindex="-1" @close="close">
                <CarouselSlide
                  v-for="(detail, detailIndex) in item.details"
                  :key="detailIndex"
                  class="extras-section-carousel__item"
                >
                  <SectionHeading variant="small" class="extras-section-carousel__item-heading">
                    {{ detail.title }}
                  </SectionHeading>
                  <p class="extras-section-carousel__item-description">{{ detail.description }}</p>
                  <img
                    :src="detail.image"
                    class="extras-section-carousel__item-image"
                    alt=""
                    loading="lazy"
                    width="840"
                    height="472"
                  >
                </CarouselSlide>
              </Carousel>
            </div>
          </template>
        </SectionExtrasModal>

        <button
          class="extras-item__image-button"
          tabindex="-1"
          title="Learn more"
          @click="modalsOpened[itemIndex] = true"
        >
          <img
            :src="item.thumbnail"
            class="extras-item__image"
            alt=""
            loading="lazy"
            width="224"
            height="224"
          >
        </button>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
  .extras-section {
    padding: 3rem 1.5rem;
    max-width: $max-width-desktop;
    margin: 0 auto;
  }

  .extras-section__list {
    display: grid;
    gap: 2rem 0;
  }

  .extras-item {
    display: grid;
    grid-template-columns: 7.5rem auto;
    grid-template-rows: repeat(3, auto);
    gap: 0.5rem 1.5rem;
    justify-items: center;
  }

  .extras-item__heading {
    grid-column: 2;
    grid-row: 1;
    place-self: end start;
  }

  .extras-item__description {
    grid-column: 2;
    grid-row: 2;
    justify-self: start;
    max-width: $max-width-mobile * 0.5;
  }

  .extras-item__learn-more-button {
    grid-column: 2;
    grid-row: 3;
    place-self: start start;

    border-radius: 0.75rem;
    margin-top: 0.75rem;

    transition:
      background-color 150ms ease-out,
      transform 200ms;
    animation: beg-for-attention 6s ease-in-out infinite;

    &:active {
      transform: none;
    }
  }

  $n: 10;

  @for $i from 1 through $n {
    .extras-item:nth-of-type(#{$n}n + #{$i}) .extras-item__learn-more-button {
      animation-delay: #{$i * 200}ms;
    }
  }

  .extras-item__image-button {
    grid-column: 1;
    grid-row: 1 / span 3;

    max-width: 10rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .extras-item__image {
    width: 100%;
    height: auto;
  }

  @media (min-width: $max-width-mobile) {
    .extras-section__list {
      max-width: $max-width-mobile * 1.25;
      margin: 0 auto;
      grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
      grid-template-rows: repeat(4, auto);
      gap: 0 3rem;
    }

    .extras-item {
      grid-row-end: span 4;
      grid-template-columns: auto;
      grid-template-rows: subgrid;
    }

    .extras-item__heading {
      grid-column: 1;
      grid-row: 2;
      place-self: auto;
    }

    .extras-item__description {
      grid-column: 1;
      grid-row: 3;
      place-self: auto;
      text-align: center;
    }

    .extras-item__learn-more-button {
      grid-column: 1;
      grid-row: 4;
      place-self: auto;
      margin-top: 0.75rem;
    }

    .extras-item__image-button {
      grid-column: 1;
      grid-row: 1;
    }
  }

  @keyframes beg-for-attention {
    0% {
      transform: none;
    }

    8% {
      transform: scale(0.95) rotate(-3deg);
    }

    10% {
      transform: scale(0.95) rotate(-3deg);
    }

    13% {
      transform: scale(1.05) rotate(8deg);
    }

    15% {
      transform: scale(1.05) rotate(-8deg);
    }

    17.5% {
      transform: scale(1.05) rotate(8deg);
    }

    20% {
      transform: none;
    }
  }

  .extras-section-carousel__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .extras-section-carousel__item-image {
    width: 100%;
    height: auto;
    order: -1;
  }

  .extras-section-carousel__item-heading {
    text-align: center;
  }

  .extras-section-carousel__item-description {
    text-align: center;
  }

  .extras-section-modal {
    position: relative;
  }

  .extras-section-modal__close-button {
    box-sizing: content-box;
    position: absolute;
    top: 1rem;
    right: 0;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    z-index: 1;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    background-color: transparent;
    color: $color-muted;
    transition:
      background-color 100ms,
      transform 100ms;

    @media (min-width: $max-width-mobile) {
      top: 2rem;
    }

    &:hover {
      transform: scale(1.15);
      color: $color-dark-lighten;
    }
  }
</style>
