<script setup lang="ts">
  import { ref } from 'vue';
  import linkBlocks from './linkBlocks';

  const linkBlocksOpened = ref<boolean[]>(Array(linkBlocks.length).fill(false));
  let currentLinkBlockIndex: number | null = null;
  const onLinkBlockOpenedChange = (index: number, opened: boolean) => {
    if (opened) {
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
  <footer class="footer">
    <div class="footer__container">
      <div class="mobile-footer">
        <FooterLinksBlockMobile
          v-for="(linkBlock, linkBlockIndex) in linkBlocks"
          :links="linkBlock.links"
          :index="linkBlockIndex"
          v-model:opened="linkBlocksOpened[linkBlockIndex]"
          @change="onLinkBlockOpenedChange"
        >
          {{ linkBlock.title }}
        </FooterLinksBlockMobile>
      </div>

      <div class="desktop-footer">
        <div v-for="linkBlock in linkBlocks" class="desktop-footer__link-block">
          <p class="desktop-footer__link-block-heading">{{ linkBlock.title }}</p>
          <ul class="desktop-footer__link-block-list">
            <li v-for="link in linkBlock.links">
              <a :href="link.href" class="desktop-footer__link">{{ link.title }}</a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="footer__separator" />

      <FooterSocialsList />

      <ul class="footer__link-list">
        <li class="footer__link-list-item">
          <a href="#" class="footer__link">Privacy Policy</a>
        </li>
        <li class="footer__link-list-item">
          <a href="#" class="footer__link">Terms of Use</a>
        </li>
        <li class="footer__link-list-item">
          <a href="#" class="footer__link">CA Supply Chain Act</a>
        </li>
        <li class="footer__link-list-item">
          <a href="#" class="footer__link">Cookie Preferences</a>
        </li>
      </ul>

      <p class="footer__copyright">© 2021 Starbucks Coffee Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss">
  .footer {
    padding: 3rem 1.5rem;
  }

  .footer__container {
    max-width: $max-width-mobile * 0.75;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $max-width-mobile) {
      max-width: $max-width-desktop;
    }
  }

  .mobile-footer {
    @media (min-width: $max-width-mobile) {
      display: none;
    }
  }

  .desktop-footer {
    display: none;

    @media (min-width: $max-width-mobile) {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
    }
  }

  .desktop-footer__link-block {
    flex: 1;
  }

  .desktop-footer__link-block-heading {
    font-family: $heading-font-family;
    font-size: 1.25rem;
    margin-bottom: 1em;
  }

  .desktop-footer__link-block-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .desktop-footer__link {
    text-decoration: none;
    color: #999;
    transition: color 200ms;

    &:hover {
      color: #444;
    }
  }

  .footer__separator {
    border: none;
    width: 100%;
    height: 2px;
    background-color: $color-light-darken;
  }

  .footer__link-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: $max-width-mobile) {
      flex-direction: row;
    }
  }

  .footer__link {
    font-size: 1rem;
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: $max-width-mobile) {
    .footer__link-list-item {
      display: contents;
    }

    .footer__link-list-item:not(:last-of-type)::after {
      content: "|";
    }
  }

  .footer__copyright {
    font-size: 0.75rem;
    color: #999;

    @media (min-width: $max-width-mobile) {
      font-size: 0.875rem;
    }
  }
</style>
