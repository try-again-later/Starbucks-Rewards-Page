<script setup lang="ts">
  import { useTemplateRef, onMounted, watch } from 'vue';

  const opened = defineModel<boolean>('opened', { required: false, default: false });
  const open = () => {
    opened.value = true;
  };
  const close = () => {
    opened.value = false;
  };

  const modal = useTemplateRef('modal');
  onMounted(() => {
    const animation = new Animation(new KeyframeEffect(
      modal.value,
      [
        {
          visbility: 'hidden',
          transform: 'translate(-50%, -50%) scale(1.2) translateY(-2rem)',
          opacity: 0,
        },
        {
          visibility: 'visible',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
        },
      ],
      {
        direction: 'normal',
        fill: 'forwards',
        duration: 150,
        easing: 'ease-in-out',
      },
    ));

    // For some reason I can't focus on modal until the transition is finished,
    // so transition visibility will not work here.
    animation.onfinish = () => {
      if (opened.value) {
        modal.value?.focus();
      }
    };

    watch(opened, (newOpened) => {
      animation.playbackRate = newOpened ? 1 : -1;
      animation.play();
    });
  });

  const onFocusOut = (event: FocusEvent) => {
    // https://stackoverflow.com/questions/61164018/typescript-ev-target-and-node-contains-eventtarget-is-not-assignable-to-node
    if (
      event.relatedTarget != null &&
      event.relatedTarget instanceof Node &&
      !modal.value?.contains(event.relatedTarget)
    ) {
      close();
    }
  };
</script>

<template>
  <slot name="button" :open="open" />

  <div
    class="extras-modal__backdrop"
    :class="{ 'extras-modal__backdrop--toggled': opened }"
    @click="close"
  />

  <div
    ref="modal"
    class="extras-modal"
    tabindex="-1"
    @keydown.esc="close"
    @focusout="onFocusOut"
  >
    <slot name="modal" :close="close" />
  </div>
</template>

<style lang="scss">
  .extras-modal__backdrop {
    position: fixed;
    inset: 0;
    z-index: $z-backdrop;

    pointer-events: none;
    opacity: 0;
    background-color: rgba(0 0 0 / 35%);
    transition: opacity 200ms;
  }

  .extras-modal__backdrop--toggled {
    pointer-events: auto;
    opacity: 1;
  }

  .extras-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: $z-modal;
    width: calc(100vw - 2rem);
    min-width: min($max-width-mobile * 0.65, calc(100vw - 2rem));
    max-width: $max-width-mobile * 0.65;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
    padding: 1rem;
    padding-top: 0;
    border-radius: 0.5rem;

    visibility: hidden;
    background-color: $color-light;
    transition:
      opacity 200ms,
      transform 200ms;

    @media (min-width: $max-width-mobile) {
      padding: 2rem;
      padding-top: 0;
    }
  }
</style>
