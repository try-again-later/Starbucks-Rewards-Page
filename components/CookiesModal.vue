<script setup lang="ts">
  import { useTemplateRef } from 'vue';

  const modal = useTemplateRef('modal');
  const { isActive: opened } = useFocusTrap(modal, { clickOutsideDeactivates: true });
  opened.value = true;
</script>

<template>
  <div
    ref="modal"
    class="cookies-modal"
    :class="{ 'cookies-modal--hidden': !opened }"
    @keydown.stop.esc="opened = false"
  >
    <p class="cookies-modal__heading">This site uses cookies, but not the kind you eat</p>

    <p class="cookies-modal__description">
      We use cookies to remember log in details, provide secure log in, improve site functionality,
      and deliver personalized content. By continuing to browse the site, you accept cookies.
    </p>

    <div class="cookies-modal__actions-section">
      <Button
        tabindex="2"
        class="cookies-modal__settings-button"
        variant="text"
      >
        Change cookie settings
      </Button>

      <Button
        tabindex="1"
        variant="primary"
        @click="opened = false"
      >
        Agree
      </Button>
    </div>
  </div>
</template>

<style lang="scss">
  .cookies-modal {
    position: fixed;
    left: 50%;
    top: 2rem;
    z-index: $z-modal;
    padding: 1.5rem 1.25rem;
    border-radius: 0.5rem;
    width: 80vw;
    max-width: $max-width-mobile * 0.5;

    transform: translateX(-50%);
    background-color: $color-light;
    box-shadow: 0 0.25rem 2.5rem rgba(0 0 0 / 45%);
    transition:
      opacity 200ms,
      visibility 200ms;

    @media (min-width: $max-width-mobile) {
      top: 8rem;
      padding: 3rem 2.0rem;
    }
  }

  .cookies-modal--hidden {
    opacity: 0;
    visibility: hidden;
  }

  .cookies-modal__heading {
    font-size: 1.125rem;
    font-family: $heading-font-family;
    text-align: center;
    margin-bottom: 1.25em;

    @media (min-width: $max-width-mobile) {
      font-size: 1.25rem;
    }
  }

  .cookies-modal__description {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .cookies-modal__actions-section {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cookies-modal__settings-button {
    color: $color-primary;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
