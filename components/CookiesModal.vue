<script setup lang="ts">
  import { ref, useTemplateRef, onMounted, watchEffect } from 'vue';

  const opened = ref(true);

  const modal = useTemplateRef('modal');
  const { activate: modalFocus, deactivate: modalBlur } = useFocusTrap(modal, {
    allowOutsideClick: false
  });
  onMounted(() => {
    modalFocus();
  });

  watchEffect(() => {
    if (!opened.value) {
      modalBlur();
    }
  });
</script>

<template>
  <div ref="modal" class="modal" :class="{ 'hidden': !opened }" @keydown.stop.esc="opened = false">
    <p class="heading">This site uses cookies, but not the kind you eat</p>
    <p class="description">
      We use cookies to remember log in details, provide secure log in, improve site functionality,
      and deliver personalized content. By continuing to browse the site, you accept cookies.
    </p>
    <div class="buttons-section">
      <Button tabindex="2" class="settings-button" variant="text">Change cookie settings</Button>
      <Button tabindex="1" @click="opened = false" class="agree-button" variant="primary">Agree</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .modal {
    position: fixed;
    left: 50%;
    top: 2rem;
    z-index: $z-modal;
    padding: 1.5rem 1.25rem;
    border-radius: 0.5rem;
    width: 80vw;
    max-width: 25rem;

    transform: translateX(-50%);
    background-color: $color-light;
    box-shadow: 0 0.25rem 2.5rem rgba(0, 0, 0, 0.45);
    transition:
      opacity 200ms,
      visibility 200ms;

    @media (min-width: $max-width-mobile) {
      top: 8rem;
      padding: 3rem 2.0rem;
      max-width: 27.5rem;
    }
  }

  .hidden {
    opacity: 0;
    visibility: hidden;
  }

  .heading {
    font-size: 1.125rem;
    font-family: $heading-font-family;
    text-align: center;
    margin-bottom: 1.25em;

    @media (min-width: $max-width-mobile) {
      font-size: 1.25rem;
    }
  }

  .description {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .buttons-section {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .settings-button {
    color: $color-primary;
    font-weight: 400;
  }

  .settings-button:hover {
    text-decoration: underline;
  }
</style>
