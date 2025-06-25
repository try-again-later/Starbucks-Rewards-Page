<template>
  <footer class="footer">
    <div class="footer__container">
      <FooterLinksMobile class="footer__links--mobile" />
      <FooterLinksDesktop class="footer__links--desktop" />

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

  .footer__links--mobile {
    @media (min-width: $max-width-mobile) {
      display: none;
    }
  }

  .footer__links--desktop {
    @media (max-width: $max-width-mobile) {
      display: none;
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
