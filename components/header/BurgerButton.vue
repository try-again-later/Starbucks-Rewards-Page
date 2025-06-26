<script setup lang="ts">
  import { watch, useTemplateRef, onMounted } from 'vue';

  const pressed = defineModel<boolean>('pressed', { required: true });

  const topBar = useTemplateRef('top-bar');
  const middleBar = useTemplateRef('middle-bar');
  const bottomBar = useTemplateRef('bottom-bar');

  onMounted(() => {
    const animationOptions = {
      direction: 'normal',
      fill: 'forwards',
      duration: 300,
      easing: 'ease-in-out',
    } as const;

    const topBarAnimation = new Animation(new KeyframeEffect(
      topBar.value,
      [
        { transform: 'none' },
        { transform: 'translateY(30%)', offset: 0.3 },
        { transform: 'translateY(30%)', offset: 0.6 },
        { transform: 'translateY(30%) rotate(45deg)' },
      ],
      animationOptions
    ));

    const middleBarAnimation = new Animation(new KeyframeEffect(
      middleBar.value,
      [
        { transform: 'none', opacity: 1 },
        { transform: 'none', offset: 0.6 },
        { transform: 'rotate(45deg)', opacity: 0 },
      ],
      animationOptions
    ));

    const bottomBarAnimation = new Animation(new KeyframeEffect(
      bottomBar.value,
      [
        { transform: 'none' },
        { transform: 'translateY(-30%)', offset: 0.3 },
        { transform: 'translateY(-30%)', offset: 0.6 },
        { transform: 'translateY(-30%) rotate(135deg)' },
      ],
      animationOptions
    ));

    // Initialize animations as reversed...
    if (pressed.value) {
      topBarAnimation.finish();
      middleBarAnimation.finish();
      bottomBarAnimation.finish();
    } else {
      topBarAnimation.playbackRate = -1;
      middleBarAnimation.playbackRate = -1;
      bottomBarAnimation.playbackRate = -1;
    }

    watch(pressed, () => {
      // ...so that we could reverse them on each button press and get the correct direction.
      topBarAnimation.reverse();
      middleBarAnimation.reverse();
      bottomBarAnimation.reverse();
    });
  });
</script>

<template>
  <button title="Open menu" class="burger-button" @click="pressed = !pressed">
    <svg
      class="burger-button__icon burger-button-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <circle class="burger-button-icon__circle" cx="50" cy="50" r="50" />
      <rect
        ref="top-bar"
        class="burger-button-icon__top-bar"
        y="15"
        width="100" height="10"
        rx="5"
      />
      <rect
        ref="middle-bar"
        class="burger-button-icon__middle-bar"
        y="45"
        width="100" height="10"
        rx="5"
      />
      <rect
        ref="bottom-bar"
        class="burger-button-icon__bottom-bar"
        y="75"
        width="100" height="10"
        rx="5"
      />
    </svg>
  </button>
</template>

<style lang="scss">
  .burger-button {
    box-sizing: content-box;
    padding: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .burger-button__icon {
    height: 100%;
    overflow: visible;
  }

  .burger-button-icon {
    fill: $color-muted;
  }

  .burger-button-icon__top-bar {
    transform-origin: 50px 20px;
  }

  .burger-button-icon__middle-bar {
    transform-origin: 50px 50px;
  }

  .burger-button-icon__bottom-bar {
    transform-origin: 50px 80px;
  }

  .burger-button-icon__circle {
    transform: scale(0.75);
    fill: $color-disabled;
    fill-opacity: 0;
    transform-origin: center;
    transition-property: transform, fill-opacity;
    transition-duration: 200ms;
    transition-timing-function: ease-in;
  }

  .burger-button:hover .burger-button-icon__circle {
    transform: scale(1.75);
    fill-opacity: 1;
  }
</style>
