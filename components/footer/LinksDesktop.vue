<script setup lang="ts">
  import linkBlocks from './linkBlocks';
</script>

<template>
  <div class="footer-links-desktop">
    <div v-for="linkBlock in linkBlocks" class="footer-links-desktop__block">
      <p class="footer-links-desktop__block-heading">{{ linkBlock.title }}</p>
      <ul class="footer-links-desktop__block-list">
        <li v-for="link in linkBlock.links">
          <a :href="link.href" class="footer-links-desktop__link">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  .footer-links-desktop {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex: 1;
  }

  .footer-links-desktop__block-heading {
    font-family: $heading-font-family;
    font-size: 1.25rem;
    margin-bottom: 1em;
  }

  .footer-links-desktop__block-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-links-desktop__link {
    text-decoration: none;
    color: #999;
    transition: color 200ms;

    &:hover {
      color: #444;
    }
  }
</style>
