<script setup lang="ts">
  import Link from '~/components/Link.vue';
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <h2 class="visually-hidden">Join Starbucks Rewards</h2>
      <p class="hero__heading">
        Free coffee
        <br>
        is a tap away
      </p>
      <p class="hero__sub-heading">Join now to start earning Rewards.</p>
      <div>
        <Button class="hero__join-button" variant="primary">Join in the app</Button>
        <Link class="hero__join-link" href="#" variant="dark">Or join online</Link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .hero {
    min-height: 37.5rem;

    background-color: #d0eae4;
    background-image: url("./hero-mobile.jpg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position-y: bottom;

    @media (min-width: $max-width-mobile) {
      aspect-ratio: 2 / 1;
      width: 100%;
      min-height: auto;
      max-height: 42.5rem;

      background-image: url("./hero-desktop.png");
      background-size: auto 100%;
      background-position-x: center;
    }
  }

  .hero__content {
    text-align: center;

    max-width: 20rem;
    margin: 0 auto;
    padding: 2rem 1rem;

    @media (min-width: $max-width-mobile) {
      text-align: left;
      max-width: $max-width-desktop;
      height: 100%;
      padding: 2rem 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 1rem;
    }
  }

  .hero__heading {
    font-family: $heading-font-family;
    font-size: 1.75rem;
    font-weight: 700;
    text-transform: uppercase;

    margin-bottom: 0.5em;

    @media (min-width: $max-width-mobile) {
      font-size: 2.25rem;
    }
  }

  .hero__sub-heading {
    @media (min-width: $max-width-mobile) {
      font-size: 1.25rem;
    }
  }

  .hero__join-button {
    margin: 1.25rem auto 0.5rem;

    @media (min-width: $max-width-mobile) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  .hero__join-link {
    @media (min-width: $max-width-mobile) {
      margin-left: 1rem;
    }
  }
</style>
