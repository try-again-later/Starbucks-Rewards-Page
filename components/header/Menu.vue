<script setup lang="ts">
  import MapPin from './icons/map-pin.svg?component';

  import { watchEffect, ref, useTemplateRef } from 'vue';

  const menu = useTemplateRef('menu');
  const menuOpened = defineModel<boolean>('opened', { required: true });
  useFocusTrap(menu, { ref: menuOpened });

  const subMenuOpened = ref(false);

  const tabIndex = ref<0 | -1>(menuOpened.value ? 0 : -1);

  watchEffect(async () => {
    if (menuOpened.value) {
      tabIndex.value = 0;
    } else {
      tabIndex.value = -1;
      subMenuOpened.value = false;
    }
  });
</script>

<template>
  <div ref="menu" class="header-menu" @keydown.esc="menuOpened = false">
    <ul>
      <li>
        <HeaderMenuButton
          variant="open-sub-menu"
          title="Open menu"
          :tabindex="tabIndex"
          @click="subMenuOpened = true"
        >
          Menu
        </HeaderMenuButton>
      </li>
      <li>
        <HeaderMenuButton href="#" :tabindex="tabIndex">Rewards</HeaderMenuButton>
      </li>
      <li>
        <HeaderMenuButton href="#" :tabindex="tabIndex">Gift Cards</HeaderMenuButton>
      </li>
    </ul>

    <div class="header-menu__section">
      <hr class="header-menu__separator">
    </div>

    <div class="header-menu__section">
      <Button is-link variant="light" href="#" :tabindex="tabIndex">Sign in</Button>
      <Button is-link variant="dark" href="#" :tabindex="tabIndex">Join now</Button>
    </div>

    <div class="header-menu__section">
      <Button is-link variant="text" href="#" :tabindex="tabIndex">
        <template #prepend><MapPin /></template>
        Find a store
      </Button>
    </div>

    <div class="header-menu__section">
      <Button
        class="header-menu__close-button"
        variant="light"
        :tabindex="tabIndex"
        @click="menuOpened = false"
      >
        Close menu
      </Button>
    </div>

    <HeaderSubMenu
      v-model:opened="subMenuOpened"
      title="Menu"
      :items="['All products', 'Featured', 'Previous', 'Favorites']"
      class="header-menu__sub-menu"
      :class="{ 'header-menu__sub-menu--opened': subMenuOpened }"
    />
  </div>
</template>

<style lang="scss">
  .header-menu {
    padding: 0;
  }

  .header-menu__close-button {
    opacity: 0;
    pointer-events: none;

    &:focus {
      opacity: 1;
    }
  }

  .header-menu__separator {
    border: none;
    width: 100%;
    height: 2px;
    background-color: $color-disabled;
  }

  .header-menu__section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .header-menu__sub-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
  }

  .header-menu__sub-menu--opened {
    transform: none;
  }
</style>
