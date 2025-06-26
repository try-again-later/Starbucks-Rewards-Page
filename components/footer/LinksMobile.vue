<script setup lang="ts">
  import { ref } from 'vue';
  import linkBlocks from './linkBlocks';
  import ArrowDown from '~/assets/icons/arrow-down.svg?component';

  const linkBlocksOpened = ref<boolean[]>(Array(linkBlocks.length).fill(false));

  let currentLinkBlockIndex: number | null = null;
  const onInputChange = (index: number) => {
    if (linkBlocksOpened.value[index]) {
      if (currentLinkBlockIndex != null) {
        linkBlocksOpened.value[currentLinkBlockIndex] = false;
      }
      currentLinkBlockIndex = index;
    } else {
      currentLinkBlockIndex = null;
    }
  };
</script>

<template>
  <div class="footer-links-mobile">
    <div
      v-for="(linkBlock, linkBlockIndex) in linkBlocks"
      :key="linkBlock.title"
      class="footer-links-mobile__block"
    >
      <label class="footer-links-mobile__block-label">
        <span class="footer-links-mobile__block-title">{{ linkBlock.title }}</span>
        <input
          v-model="linkBlocksOpened[linkBlockIndex]"
          type="checkbox"
          name="footer-links-block"
          class="visually-hidden"
          @change="onInputChange(linkBlockIndex)"
        >
        <span class="footer-links-mobile__block-icon-wrapper">
          <ArrowDown class="footer-links-mobile__block-icon" />
        </span>
      </label>

      <div class="footer-links-mobile__block-list-wrapper">
        <ul class="footer-links-mobile__block-list">
          <li v-for="link in linkBlock.links" :key="link.title">
            <a
              :tabindex="linkBlocksOpened[linkBlockIndex] ? 0 : -1"
              :href="link.href"
              class="footer-links-mobile__link"
            >
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .footer-links-mobile__block-list-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 400ms;
  }

  .footer-links-mobile__block-label:has(input:checked) + .footer-links-mobile__block-list-wrapper {
    grid-template-rows: 1fr;
  }

  .footer-links-mobile__block-list {
    overflow: hidden;
  }

  .footer-links-mobile__block-label {
    font-family: $heading-font-family;
    font-size: 1.25rem;
    list-style-type: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.75em 0;

    &:hover {
      text-decoration: underline;
    }

    &:has(input:focus-visible) {
      outline: 2px solid $color-secondary;
    }
  }

  .footer-links-mobile__block-title {
    flex: 1;
  }

  .footer-links-mobile__block-icon-wrapper {
    position: relative;
    width: 2rem;
    height: 2rem;
    transition: transform 200ms;
  }

  input:checked + .footer-links-mobile__block-icon-wrapper {
    transform: rotate(-180deg);
  }

  .footer-links-mobile__block-icon-wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: $color-disabled;
    opacity: 0;
    transform: scale(0.75);
    transition:
      opacity 200ms,
      transform 200ms;
  }

  .footer-links-mobile__block-label:hover .footer-links-mobile__block-icon-wrapper::before {
    transform: scale(1.25);
    opacity: 1;
  }

  .footer-links-mobile__block-icon {
    position: relative;
    z-index: 1;
  }

  .footer-links-mobile__link {
    text-decoration: none;
    font-size: 1rem;
    display: block;
    padding: 0.5em 0;
    color: #999;
    transition: color 200ms;

    &:hover {
      color: #444;
    }
  }
</style>
