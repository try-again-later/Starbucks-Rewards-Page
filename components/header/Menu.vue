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
  <div ref="menu" class="menu" @keydown.esc="menuOpened = false">
    <ul>
      <li>
        <HeaderMenuButton
          variant="open-sub-menu"
          aria-label="Open menu"
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

    <div class="section">
      <hr class="separator" />
    </div>

    <div class="section">
      <Button is-link variant="light" href="#" :tabindex="tabIndex">Sign in</Button>
      <Button is-link variant="dark" href="#" :tabindex="tabIndex">Join now</Button>
    </div>

    <div class="section">
      <Button is-link variant="text" href="#" :tabindex="tabIndex">
        <template #prepend><MapPin /></template>
        Find a store
      </Button>
    </div>

    <div class="section">
      <Button
        @click="menuOpened = false"
        class="close-menu-button"
        variant="light"
        :tabindex="tabIndex"
      >
        Close menu
      </Button>
    </div>

    <HeaderSubMenu
      title="Menu"
      :items="['All products', 'Featured', 'Previous', 'Favorites']"
      v-model:opened="subMenuOpened"
      class="sub-menu"
      :class="{ 'sub-menu-opened': subMenuOpened }"
    />
  </div>
</template>

<style scoped lang="scss">
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

  .sub-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
  }

  .sub-menu-opened {
    transform: none;
  }
</style>
