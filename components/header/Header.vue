<script lang="ts">
  import { ref, watchEffect } from 'vue';
  import Logo from '~/assets/logo.svg?component';
  import MapPin from './icons/map-pin.svg?component';

  import exportedCSS from '~/assets/scss/exported.module.scss';

  const navItems = ['menu', 'rewards', 'gift-cards'] as const;

  export type NavItem = typeof navItems[number];
</script>

<script setup lang="ts">
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
    <div class="header__content-wrapper" :class="{ 'header__content-wrapper--fixed': menuOpened }">
      <div class="header__content">
        <a class="header__logo-link" href="#"><Logo class="header__logo" /></a>

        <nav class="header__desktop-nav">
          <ul class="header__desktop-nav-list">
            <li
              v-for="item in navItems"
              :key="item"
              class="header__desktop-nav-item"
              :class="{'header__desktop-nav-item--active': item === activeNavItem}"
            >
              <a href="#" class="header__desktop-nav-link">{{ item }}</a>
            </li>
          </ul>

          <Button is-link variant="text" href="#">
            <template #prepend><MapPin /></template>
            Find a store
          </Button>

          <div class="header__desktop-sign-in-section">
            <Button is-link variant="light" href="#">Sign in</Button>
            <Button is-link variant="dark" href="#">Join now</Button>
          </div>
        </nav>

        <HeaderBurgerButton v-model:pressed="menuOpened" class="header__burger-button" />
      </div>
    </div>

    <div
      class="header__backdrop"
      :class="{ 'header__backdrop--toggled': menuOpened }"
      @click.self="menuOpened = false"
    >
      <nav
        tabindex="-1"
        class="header__mobile-nav"
        :class="{ 'header__mobile-nav--opened': menuOpened }"
      >
        <div class="header__mobile-nav-content">
          <HeaderMenu v-model:opened="menuOpened" />
        </div>
      </nav>
    </div>
  </header>

  <div class="sub-header" :class="{ 'sub-header--under-menu': menuOpened }">
    <div class="sub-header__content">
      <p>Starbucks rewards<sup>&reg;</sup></p>
      <Button variant="secondary">Join in the app</Button>
    </div>
  </div>
</template>

<style lang="scss">
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

  .header__content-wrapper {
    position: relative;
    z-index: $z-modal;
    width: 100%;
    height: var(--header-height);

    background-color: white;
    box-shadow: 0 0 4px rgba(0 0 0 / 25%);
  }

  .header__content-wrapper--fixed {
    position: fixed;
    top: 0;
  }

  .header__content {
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

  .header__logo-link {
    height: 60%;
    margin-right: 1rem;
  }

  .header__logo {
    height: 100%;
  }

  .header__burger-button {
    margin-left: auto;
    height: 30%;

    @media (min-width: $max-width-mobile) {
      display: none;
    }
  }

  .header__backdrop {
    position: fixed;
    inset: 0;
    z-index: $z-backdrop;

    background-color: transparent;
    transition: background-color 200ms;
    pointer-events: none;
  }

  .header__backdrop--toggled {
    background-color: rgba(0 0 0 / 55%);
    pointer-events: auto;
  }

  .header__mobile-nav {
    position: absolute;
    right: 0;
    width: 80%;
    height: 100%;
    max-width: 30rem;
    padding-top: var(--header-height);
    overflow: hidden auto;

    transition: transform 200ms ease-in-out;
    transform: translateX(100%);
    background-color: white;

    @media (min-width: $max-width-mobile) {
      display: none;
    }
  }

  .header__mobile-nav--opened {
    transform: none;
  }

  .header__mobile-nav-content {
    position: relative;
  }

  .header__desktop-nav {
    flex: 1;

    display: none;
    height: 100%;

    @media (min-width: $max-width-mobile) {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }

  .header__desktop-nav-list {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    height: 100%;
    margin-right: auto;
  }

  .header__desktop-nav-item {
    display: flex;
    align-items: center;

    position: relative;
    height: 100%;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .header__desktop-nav-item--active::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    background-color: $color-primary;
  }

  .header__desktop-nav-link {
    font-size: 1rem;
    font-weight: 900;
    color: $color-secondary;
    text-decoration: none;
    text-transform: uppercase;

    transition: color 200ms;

    &:hover {
      color: $color-primary;
      text-decoration: underline;
    }
  }

  .header__desktop-sign-in-section {
    display: flex;
    gap: 0.75rem;
  }

  .sub-header {
    font-size: 0.75rem;

    position: sticky;
    top: 0;
    width: 100%;
    background-color: $color-secondary;
    box-shadow: rgba(0 0 0 / 25%) 0 4px 4px;
    z-index: $z-header;

    @media (min-width: $max-width-mobile) {
      font-size: 0.875rem;
      top: $header-height-desktop;
    }
  }

  .sub-header--under-menu {
    margin-top: $header-height-mobile;
  }

  .sub-header__content {
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
