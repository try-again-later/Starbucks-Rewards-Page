<script setup lang="ts">
  import { ref, useTemplateRef, watchEffect } from 'vue';

  type Props = {
    title: string;
    items: string[];
  };
  const { title, items } = defineProps<Props>();

  const menu = useTemplateRef('menu');
  const menuOpened = defineModel<boolean>('opened', { required: true });
  useFocusTrap(menu, { ref: menuOpened });

  const tabIndex = ref<0 | -1>(-1);

  watchEffect(async () => {
    if (menuOpened.value) {
      tabIndex.value = 0;
    } else {
      tabIndex.value = -1;
    }
  });
</script>

<template>
  <div ref="menu" class="menu" @keydown.stop.esc="menuOpened = false">
    <HeaderMenuButton
      @click="menuOpened = false"
      variant="close-sub-menu"
      aria-label="Close menu"
      :tabindex="tabIndex"
    >
      {{title}}
    </HeaderMenuButton>
    <ul>
      <li v-for="item in items">
        <HeaderMenuButton href="#" :tabindex="tabIndex">{{item}}</HeaderMenuButton>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .menu {
    padding: 0;
    background-color: white;
    transition: transform 200ms ease-in-out;
  }
</style>
