<script lang="ts">
  export type Link = {
    title: string;
    href: string;
  };
</script>

<script setup lang="ts">
  import ArrowDown from '~/assets/icons/arrow-down.svg?component';

  const { links, index } = defineProps<{
    links: Link[];
    index: number;
  }>();

  const opened = defineModel<boolean>('opened', { required: true });

  const emit = defineEmits<{
    change: [index: number, opened: boolean];
  }>();

  const onInputChange = () => {
    emit('change', index, opened.value);
  };
</script>

<template>
  <div class="footer-links-block">
    <label class="footer-links-block__title-label">
      <span class="footer-links-block__title">
        <slot></slot>
      </span>
      <input
        type="checkbox"
        name="footer-links-block"
        class="visually-hidden"
        v-model="opened"
        @change="onInputChange"
      />
      <span class="footer-links-block__title-icon-wrapper">
        <ArrowDown class="footer-links-block__title-icon" />
      </span>
    </label>

    <div class="footer-links-block__links-list-wrapper">
      <ul class="footer-links-block__links-list">
        <li v-for="link in links">
          <a :tabindex="opened ? 0 : -1" :href="link.href" class="footer-links-block__link">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  .footer-links-block__links-list-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 400ms;
  }

  .footer-links-block__title-label:has(input:checked) + .footer-links-block__links-list-wrapper {
    grid-template-rows: 1fr;
  }

  .footer-links-block__links-list {
    overflow: hidden;
  }

  .footer-links-block__title-label {
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

  .footer-links-block__title {
    flex: 1;
  }

  .footer-links-block__title-icon-wrapper {
    position: relative;
    width: 2rem;
    height: 2rem;
    transition: transform 200ms;
  }

  input:checked + .footer-links-block__title-icon-wrapper {
    transform: rotate(-180deg);
  }

  .footer-links-block__title-icon-wrapper::before {
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

  .footer-links-block__title-label:hover .footer-links-block__title-icon-wrapper::before {
    transform: scale(1.25);
    opacity: 1;
  }

  .footer-links-block__title-icon {
    position: relative;
    z-index: 1;
  }

  .footer-links-block__link {
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
