<script setup lang="ts">
  import SpotifyIcon from './social-icons/spotify.svg?component';
  import FacebookIcon from './social-icons/facebook.svg?component';
  import PinterestIcon from './social-icons/pinterest.svg?component';
  import InstagramIcon from './social-icons/instagram.svg?component';
  import YouTubeIcon from './social-icons/youtube.svg?component';
  import TwitterIcon from './social-icons/twitter.svg?component';

  const socialIcons = {
    Spotify: SpotifyIcon,
    Facebook: FacebookIcon,
    Pinterest: PinterestIcon,
    Instagram: InstagramIcon,
    YouTube: YouTubeIcon,
    Twitter: TwitterIcon,
  };
</script>

<template>
  <ul class="footer-socials-list">
    <li v-for="(icon, title) in socialIcons" :key="title" class="footer-socials-list__item">
      <a href="#" class="footer-socials-list__link" :title="title">
        <component :is="icon" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
  .footer-socials-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-socials-list__item {
    position: relative;
    display: block;
    width: 2rem;
    height: 2rem;
  }

  .footer-socials-list__item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: $color-disabled;
    opacity: 0;
    transition:
      transform 200ms,
      opacity 200ms;
  }

  .footer-socials-list__item:hover::before {
    opacity: 1;
    transform: scale(1.5);
  }

  .footer-socials-list__link {
    position: relative;
    z-index: 1;
    color: black;
  }
</style>
