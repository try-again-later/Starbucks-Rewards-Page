<script setup lang="ts">
  import ArrowLeft from './icons/arrow-left.svg?component';
  import ArrowRight from './icons/arrow-right.svg?component';
  import MapPin from './icons/map-pin.svg?component';

  import { watch, ref, nextTick } from 'vue';

  const { isOpened } = defineProps<{
    isOpened: boolean,
  }>();

  const emit = defineEmits<{
    close: [],
  }>();

  const menu = useTemplateRef('menu');
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
        <ul class="menu-list">
          <li><button class="menu-button" aria-label="Open menu" :tabindex="menuTabIndex">
            Menu
            <ArrowRight class="icon" aria-hidden="true" />
          </button></li>
          <li><a class="menu-button" href="#" :tabindex="menuTabIndex">Rewards</a></li>
          <li><a class="menu-button" href="#" :tabindex="menuTabIndex">Gift Cards</a></li>
        </ul>

        <hr class="separator" />

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

      <div class="sub-menu">
        <button tabindex="-1">Menu</button>
        <ul class="sub-menu-list">
          <li><a href="#" tabindex="-1">All products</a></li>
          <li><a href="#" tabindex="-1">Featured</a></li>
          <li><a href="#" tabindex="-1">Previous</a></li>
          <li><a href="#" tabindex="-1">Favorites</a></li>
        </ul>
      </div>
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

  .menu,
  .sub-menu {
    padding: 1rem 2rem;
  }

  .sub-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: white;
    transform: translateX(100%);
  }

  .menu-button {
    font-family: Lunasima, sans-serif;
    font-size: 1.125rem;
    text-decoration: none;
    color: #555;
    white-space: nowrap;

    display: flex;
    width: 100%;
    padding: 1rem 0;
    align-items: center;
    justify-content: space-between;

    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  .menu-button:hover {
    text-decoration: underline;
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
    height: 2px;
    margin: 1rem 0;
    background-color: rgba(0 0 0 / 15%);
  }

  .section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem 0;
  }
</style>
