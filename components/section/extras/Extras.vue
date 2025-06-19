<script setup lang="ts">
  import ExtrasFreeImage from './images/extras-free.jpg';
  import ExtrasOrderImage from './images/extras-order.jpg';
  import ExtrasBonusImage from './images/extras-bonus.jpg';

  type ExtrasItem = {
    title: string;
    description: string;
    image: string;
  };

  const extrasItems: ExtrasItem[] = [
    {
      title: 'Endless extras',
      description: 'Joining Starbucks<sup>&reg;</sup> Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and&mdash;yes, free coffee.',
      image: ExtrasFreeImage,
    },
    {
      title: 'Fun freebies',
      description: 'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.',
      image: ExtrasOrderImage,
    },
    {
      title: 'Order & pay ahead',
      description: 'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.',
      image: ExtrasBonusImage,
    },
  ];
</script>

<template>
  <section class="section">
    <SectionHeading variant="large">Endless extras</SectionHeading>
    <SectionSubHeading>
      Joining Starbucks<sup>&reg;</sup> Rewards means unlocking access to exclusive benefits.
      Say hello to easy ordering, tasty Rewards and&mdash;yes, free coffee.
    </SectionSubHeading>

    <ul class="extras-list">
      <li class="extras-item" v-for="item in extrasItems">
        <SectionHeading variant="small" class="heading">{{ item.title }}</SectionHeading>
        <p v-html="item.description" class="description"></p>
        <Button variant="primary" class="learn-more-button begging-for-attention">Learn more</Button>
        <button aria-hidden="true" tabindex="-1" class="image-button">
          <img :src="item.image" class="image" />
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
  }

  .begging-for-attention {
    transform: none;
    transition: background-color 0.15s ease-out;
    animation: beg-for-attention 6s ease-in-out infinite;
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

  @for $i from 1 through 10 {
    .extras-item:nth-of-type(#{$i}) .begging-for-attention {
      animation-delay: #{$i * 200}ms;
    }
  }
</style>
