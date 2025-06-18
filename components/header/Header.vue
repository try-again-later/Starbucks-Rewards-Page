<script lang="ts">
  const navItems = ['menu', 'rewards', 'gift-cards'] as const;

  export type NavItem = typeof navItems[number];
</script>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue';
  import Logo from '~/assets/logo.svg?component';
  import MapPin from './icons/map-pin.svg?component';

  import exportedCSS from '~/assets/scss/exported.module.scss';
  const { maxWidthMobile } = exportedCSS;

  defineProps<{
    activeNavItem?: NavItem,
  }>();

  const menuOpened = ref(false);

  const isDesktopScreen = useMedia(`(min-width: ${maxWidthMobile})`);
  watchEffect(() => {
    if (isDesktopScreen.value) {
      menuOpened.value = false;
    }
  });
</script>

<template>
  <header class="header">
    <div class="header-wrapper" :class="{ 'header-wrapper-fixed': menuOpened }">
      <div class="header-content">
        <a class="logo-link" href="#"><Logo class="logo" /></a>

        <nav class="desktop-nav">
          <ul class="desktop-nav-list">
            <li
              v-for="item in navItems"
              class="desktop-nav-list-item"
              :class="{'active': item === activeNavItem}"
            >
              <a href="#">{{ item }}</a>
            </li>
          </ul>

          <Button is-link variant="text" href="#">
            <template #prepend><MapPin /></template>
            Find a store
          </Button>

          <div class="desktop-nav-sign-in-section">
            <Button is-link variant="light" href="#">Sign in</Button>
            <Button is-link variant="dark" href="#">Join now</Button>
          </div>
        </nav>

        <HeaderBurgerButton v-model:pressed="menuOpened" class="menu-button" />
      </div>
    </div>

    <div
      @click.self="menuOpened = false"
      class="backdrop"
      :class="{ 'backdrop-toggled': menuOpened }"
    >
      <nav class="mobile-nav" tabindex="-1" :class="{ 'mobile-nav-opened': menuOpened }">
        <div class="mobile-nav-content">
          <HeaderMenu v-model:opened="menuOpened" />
        </div>
      </nav>
    </div>
  </header>

  <div class="sub-header" :class="{ 'sub-header-under-menu': menuOpened }">
    <div class="sub-header-content">
      <p>Starbucks rewards<sup>&reg;</sup></p>
      <Button variant="secondary">Join in the app</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  $header-height-mobile: 5rem;
  $header-height-desktop: 6rem;

  .header {
    --header-height: #{$header-height-mobile};

    @media (min-width: $max-width-mobile) {
      --header-height: #{$header-height-desktop};

      position: sticky;
      z-index: $z-header;
      top: 0;
    }
  }

  .header-wrapper {
    position: relative;
    z-index: $z-modal;
    width: 100%;
    height: var(--header-height);

    background-color: white;
    box-shadow: 0 0 4px rgba(0 0 0 / 25%);
  }

  .header-wrapper-fixed {
    position: fixed;
    top: 0;
  }

  .header-content {
    display: flex;
    align-items: center;

    max-width: $max-width-desktop;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 0.75rem;

    background-color: white;

    @media (min-width: $max-width-mobile) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .logo-link {
    height: 60%;
    margin-right: 1rem;
  }

  .logo {
    height: 100%;
  }

  .menu-button {
    margin-left: auto;
    height: 30%;
  }

  @media (min-width: $max-width-mobile) {
    .menu-button {
      display: none;
    }
  }

  .backdrop {
    position: fixed;
    inset: 0;
    z-index: $z-backdrop;

    background-color: transparent;
    transition: background-color 200ms;
    pointer-events: none;
  }

  .backdrop-toggled {
    background-color: rgba(0 0 0 / 55%);
    pointer-events: auto;
  }

  .mobile-nav {
    position: absolute;
    right: 0;
    width: 80%;
    height: 100%;
    max-width: 30rem;
    padding-top: var(--header-height);
    overflow-x: hidden;
    overflow-y: auto;

    transition: transform 200ms ease-in-out;
    transform: translateX(100%);
    background-color: white;

    @media (min-width: $max-width-mobile) {
      display: none;
    }
  }

  .mobile-nav-opened {
    transform: none;
  }

  .mobile-nav-content {
    position: relative;
  }

  .desktop-nav {
    flex: 1;

    display: none;
    height: 100%;

    @media (min-width: $max-width-mobile) {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }

  .desktop-nav-list {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    height: 100%;
    margin-right: auto;
  }

  .desktop-nav-list-item {
    display: flex;
    align-items: center;

    position: relative;
    height: 100%;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .desktop-nav-list-item.active::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    background-color: $color-primary;
  }

  .desktop-nav-list-item > a {
    font-size: 1rem;
    font-weight: 900;
    color: $color-secondary;
    text-decoration: none;
    text-transform: uppercase;

    transition: color 200ms;
  }

  .desktop-nav-list-item > a:hover {
    color: $color-primary;
    text-decoration: underline;
  }

  .desktop-nav-sign-in-section {
    display: flex;
    gap: 0.75rem;
  }

  .sub-header {
    font-size: 0.75rem;

    position: sticky;
    top: 0;
    width: 100%;
    background-color: $color-secondary;
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
    z-index: $z-header;

    @media (min-width: $max-width-mobile) {
      font-size: 0.875rem;
      top: $header-height-desktop;
    }
  }

  .sub-header-under-menu {
    margin-top: $header-height-mobile;
  }

  .sub-header-content {
    text-transform: uppercase;
    font-weight: 700;
    font-family: $heading-font-family;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 1.5rem;
    margin: 0 auto;
    max-width: $max-width-desktop;

    color: $color-light;

    :first-child {
      flex-grow: 999;
    }

   :last-child {
      flex-grow: 1;
    }
  }
</style>
