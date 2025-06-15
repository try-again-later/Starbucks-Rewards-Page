<script lang="ts">
  export type NavItem = 'menu' | 'rewards' | 'gift-cards';
</script>

<script setup lang="ts">
  import Logo from '~/assets/logo.svg';

  const { activeNavItem } = defineProps<{
    activeNavItem?: NavItem,
  }>();
</script>

<template>
  <div class="header-wrapper container">
    <header class="header">
      <a href="#"><img :src="Logo" alt="Starbucks Logo" class="logo" /></a>
      <HeaderMenuButton />
    </header>
  </div>
</template>

<style scoped lang="scss">
  .header-wrapper {
    background-color: white;
    box-shadow: 0 0 4px rgba(0 0 0 / 25%);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: $max-width-desktop;
    padding: 1rem;
  }

  .logo {
    width: 3.5rem;
  }
</style>
