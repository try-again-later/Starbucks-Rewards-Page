<script setup lang="ts">
  import MapPin from './icons/map-pin.svg?component';

  import { watch, ref, nextTick, useTemplateRef } from 'vue';

  const { isOpened } = defineProps<{
    isOpened: boolean,
  }>();

  const emit = defineEmits<{
    close: [],
  }>();

  const menu = useTemplateRef('menu');
  const subMenu = useTemplateRef('sub-menu');

  const menuTabIndex = ref(isOpened ? 0 : -1);
  const { activate: menuFocus, deactivate: menuBlur } = useFocusTrap(menu);
  watch(
    () => isOpened,
    async (newIsOpened) => {
      if (newIsOpened) {
        menuTabIndex.value = 0;
        await nextTick();
        menuFocus();
      } else {
        menuTabIndex.value = -1;
        subMenu.value?.close();
        menuBlur();
      }
    },
    { immediate: true }
  );
</script>

<template>
  <nav class="nav" tabindex="-1">
    <div class="nav-content">
      <div ref="menu" class="menu">
        <ul>
          <li>
            <HeaderMenuButton
              variant="open-sub-menu"
              aria-label="Open menu"
              :tabindex="menuTabIndex"
              @click="subMenu?.open()"
            >
              Menu
            </HeaderMenuButton>
          </li>
          <li>
            <HeaderMenuButton href="#" :tabindex="menuTabIndex">Rewards</HeaderMenuButton>
          </li>
          <li>
            <HeaderMenuButton href="#" :tabindex="menuTabIndex">Gift Cards</HeaderMenuButton>
          </li>
        </ul>

        <div class="section">
          <hr class="separator" />
        </div>

        <div class="section">
          <Button is-link variant="light" href="#" :tabindex="menuTabIndex">Sign in</Button>
          <Button is-link variant="dark" href="#" :tabindex="menuTabIndex">Join now</Button>
        </div>

        <div class="section">
          <Button is-link variant="text" href="#" :tabindex="menuTabIndex">
            <template #prepend><MapPin /></template>
            Find a store
          </Button>
        </div>

        <div class="section">
          <Button
            @click="emit('close')"
            class="close-menu-button"
            variant="light"
            :tabindex="menuTabIndex"
          >
            Close menu
          </Button>
        </div>
      </div>

      <HeaderSubMenu
        ref="sub-menu"
        title="Menu"
        :items="['All products', 'Featured', 'Previous', 'Favorites']"
      />
    </div>
  </nav>
</template>

<style scoped lang="scss">
  .nav {
    overflow-x: hidden;
    overflow-y: auto;
    background-color: white;
  }

  .nav-content {
    position: relative;
  }

  .menu {
    padding: 0;
  }

  .close-menu-button {
    opacity: 0;
    pointer-events: none;
  }

  .close-menu-button:focus {
    opacity: 1;
  }

  .separator {
    border: none;
    width: 100%;
    height: 2px;
    background-color: $color-disabled;
  }

  .section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
</style>
