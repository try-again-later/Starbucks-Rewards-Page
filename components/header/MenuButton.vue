<script setup lang="ts">
  import { ref, watch, useTemplateRef, onMounted } from 'vue';

  const emit = defineEmits<{
    click: [pressed: boolean]
  }>();

  const pressed = ref(false);

  const topBar = useTemplateRef('top-bar');
  const middleBar = useTemplateRef('middle-bar');
  const bottomBar = useTemplateRef('bottom-bar');

  onMounted(() => {
    const animationOptions = {
      direction: 'normal',
      fill: 'forwards',
      duration: 300,
      easing: 'ease-in-out',
    };

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
    topBarAnimation.playbackRate = -1;
    middleBarAnimation.playbackRate = -1;
    bottomBarAnimation.playbackRate = -1;

    watch(pressed, (newPressed) => {
      // ...so that we could reverse them on each button press and get the correct direction.
      topBarAnimation.reverse();
      middleBarAnimation.reverse();
      bottomBarAnimation.reverse();

      emit('click', newPressed);
    });
  });
</script>

<template>
  <button @click="pressed = !pressed" aria-label="Open menu" class="button">
    <svg class="burger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle class="circle" cx="50" cy="50" r="50" />
      <rect ref="top-bar" class="top-bar" y="15" width="100" height="10" rx="5" />
      <rect ref="middle-bar" class="middle-bar" y="45" width="100" height="10" rx="5" />
      <rect ref="bottom-bar" class="bottom-bar" y="75" width="100" height="10" rx="5" />
    </svg>
  </button>
</template>

<style scoped lang="scss">
  .button {
    box-sizing: content-box;
    padding: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .burger-icon {
    fill: #777;
    overflow: visible;
  }

  .top-bar {
    transform-origin: 50px 20px;
  }

  .middle-bar {
    transform-origin: 50px 50px;
  }

  .bottom-bar {
    transform-origin: 50px 80px;
  }

  .circle {
    transform: scale(0.75);
    fill: #ddd;
    fill-opacity: 0;
    transform-origin: center;
    transition-property: transform, fill-opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }

  .button:hover .circle {
    transform: scale(1.75);
    fill-opacity: 1;
  }
</style>
