<script setup lang="ts">
  import { ref, useTemplateRef, nextTick } from 'vue';

  const emit = defineEmits<{
    close: [];
  }>();

  type Props = {
    title: string;
    items: string[];
  };
  const { title, items } = defineProps<Props>();

  const isOpened = ref(false);

  const element = useTemplateRef('sub-menu');
  const tabIndex = ref<0 | -1>(-1);
  const { activate: activateTrap, deactivate: deactivateTrap } = useFocusTrap(element);

  const open = async () => {
    if (!isOpened.value) {
      isOpened.value = true;
      tabIndex.value = 0;
      await nextTick();
      activateTrap();
    }
  };

  const close = () => {
    if (isOpened.value) {
      isOpened.value = false;
      tabIndex.value = -1;
      emit('close');
      deactivateTrap();
    }
  };

  defineExpose({ open, close });
</script>

<template>
  <div ref="sub-menu" class="sub-menu" :class="{'opened': isOpened}">
    <HeaderMenuButton
      @click="close()"
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
  .sub-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: white;
    transform: translateX(100%);
    transition: transform 200ms ease-in-out;
  }

  .sub-menu.opened {
    transform: none;
  }
</style>
