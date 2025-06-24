<script setup lang="ts">
  import { ref } from 'vue';
  import extrasItems from './items';

  const modalsOpened = ref<boolean[]>(new Array(extrasItems.length).fill(false));
</script>

<template>
  <section class="section">
    <SectionHeading variant="large">Endless extras</SectionHeading>
    <SectionSubHeading>
      Joining Starbucks<sup>&reg;</sup> Rewards means unlocking access to exclusive benefits.
      Say hello to easy ordering, tasty Rewards and&mdash;yes, free coffee.
    </SectionSubHeading>

    <ul class="extras-list">
      <li class="extras-item" v-for="(item, itemIndex) in extrasItems" :key="itemIndex">
        <SectionHeading variant="small" class="heading">{{ item.title }}</SectionHeading>
        <p v-html="item.description" class="description"></p>

        <SectionExtrasModal v-model:opened="modalsOpened[itemIndex]">
          <template #button="{ open }">
            <Button @click="open" variant="primary" class="begging-for-attention">
              Learn more
            </Button>
          </template>

          <template #modal="{ close }">
            <Carousel @close="close">
              <CarouselItem v-for="detail in item.details" class="carousel-item">
                <SectionHeading variant="small" class="carousel-item-heading">
                  {{ detail.title }}
                </SectionHeading>
                <p class="carousel-item-description">{{ detail.description }}</p>
                <img :src="detail.image" class="carousel-item-image" />
              </CarouselItem>
            </Carousel>
          </template>
        </SectionExtrasModal>

        <button class="image-button" @click="modalsOpened[itemIndex] = true" tabindex="-1">
          <img :src="item.thumbnail" class="image" />
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
  .section {
    padding: 3rem 1.5rem;
    max-width: $max-width-desktop;
    margin: 0 auto;
  }

  .extras-list {
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

  .heading {
    grid-column: 2;
    grid-row: 1;
    place-self: end start;
  }

  .description {
    grid-column: 2;
    grid-row: 2;
    justify-self: start;
    max-width: $max-width-mobile * 0.5;
  }

  .button {
    grid-column: 2;
    grid-row: 3;
    place-self: start start;

    border-radius: 0.75rem;
    margin-top: 0.75rem;
  }

  .image-button {
    grid-column: 1;
    grid-row: 1 / span 3;

    max-width: 10rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .image {
    width: 100%;
    height: auto;
  }

  @media (min-width: $max-width-mobile) {
    .extras-list {
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

    .heading {
      grid-column: 1;
      grid-row: 2;
      place-self: auto;
    }

    .description {
      grid-column: 1;
      grid-row: 3;
      place-self: auto;
      text-align: center;
    }

    .button {
      grid-column: 1;
      grid-row: 4;
      place-self: auto;
      margin-top: 0.75rem;
    }

    .image-button {
      grid-column: 1;
      grid-row: 1;
    }
  }

  .begging-for-attention {
    transform: none;
    transition:
      background-color 150ms ease-out,
      transform 200ms;
    animation: beg-for-attention 6s ease-in-out infinite;
  }

  .begging-for-attention:active {
    transform: none;
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

  $N: 10;
  @for $i from 1 through $N {
    .extras-item:nth-of-type(#{$N}n + #{$i}) .begging-for-attention {
      animation-delay: #{$i * 200}ms;
    }
  }

  .carousel-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .carousel-item-image {
    width: 100%;
    height: auto;
    order: -1;
  }

  .carousel-item-heading {
    text-align: center;
    align-self: stretch;
  }

  .carousel-item-description {
    text-align: center;
  }
</style>
