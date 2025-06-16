<script lang="ts">
  export type NavItem = 'menu' | 'rewards' | 'gift-cards';
</script>

<script setup lang="ts">
  import { ref } from 'vue';
  import Logo from '~/assets/logo.svg?component';

  const { activeNavItem } = defineProps<{
    activeNavItem?: NavItem,
  }>();

  const menuOpened = ref(false);
</script>

<template>
  <header>
    <div class="header-wrapper">
      <div class="header-content">
        <a class="logo-link" href="#"><Logo class="logo" /></a>
        <HeaderMenuButton v-model:pressed="menuOpened" class="menu-button" />
      </div>
    </div>

    <div
      @click.self="menuOpened = false"
      class="backdrop"
      :class="{ 'backdrop-toggled': menuOpened }"
    >
      <HeaderMenu
        class="header-menu"
        :class="{ 'header-menu-toggled': menuOpened }"
        :is-opened="menuOpened"
        @close="menuOpened = false"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
  $header-height: 5rem;

  .header-wrapper {
    position: relative;
    z-index: 10;
    width: 100%;
    height: $header-height;

    background-color: white;
    box-shadow: 0 0 4px rgba(0 0 0 / 25%);
  }

  .header-content {
    display: flex;
    align-items: center;

    padding: 0.75rem;
    max-width: $max-width-desktop;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

    background-color: white;
  }

  .logo-link {
    height: 100%;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .logo {
    height: 100%;
  }

  .menu-button {
    margin-left: auto;
    height: 50%;
  }

  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 5;

    background-color: transparent;
    transition: background-color 200ms;
    pointer-events: none;
  }

  .backdrop-toggled {
    background-color: rgba(0 0 0 / 55%);
    pointer-events: auto;
  }

  .header-menu {
    position: absolute;
    right: 0;
    width: 80%;
    height: 100%;
    max-width: 30rem;
    padding-top: $header-height;

    transition: transform 300ms ease-in-out;
    transform: translateX(100%);
  }

  .header-menu-toggled {
    transform: none;
  }
</style>
