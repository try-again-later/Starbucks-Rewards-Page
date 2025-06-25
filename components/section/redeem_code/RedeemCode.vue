<script setup lang="ts">
  import Link from '~/components/Link.vue';
  import RedeemCodeInput from './RedeemCodeInput.vue';
</script>

<template>
  <section class="redeem-code-section">
    <SectionHeading variant="large" class="redeem-code-section__heading">
      Star Codes
    </SectionHeading>
    <SectionSubHeading class="redeem-code-section__sub-heading">
      Yesssss. You’ve got Stars in your hand.
      Enter your code here and we’ll add Stars to your account.
    </SectionSubHeading>

    <form action="#" method="post" class="redeem-code-section__form">
      <RedeemCodeInput name="code" />
      <Button
        variant="light"
        type="submit"
        class="redeem-code-section__submit-code-button"
      >
        Submit
      </Button>

      <p class="redeem-code-section__subscript">
        Have a receipt but don't have a code?
        <br />
        Go to
        <Link variant="primary" href="https://try-again-later.github.io">starbucks-stars.com</Link>
        to upload your receipt and collect your Stars.
      </p>
    </form>

    <SectionHeading variant="large" class="redeem-code-section__heading">
      Questions?
    </SectionHeading>
    <SectionSubHeading class="redeem-code-section__sub-heading">
      We want to help in any way we can.
      You can ask your barista anytime or we’ve answered the most commonly asked questions
      <Link variant="primary" href="https://try-again-later.github.io">right over here</Link>.
    </SectionSubHeading>
  </section>
</template>

<style lang="scss">
  .redeem-code-section {
    padding: 3rem 1.5rem;
    max-width: $max-width-mobile * 0.8;
    margin: 0 auto;
  }

  .redeem-code-section__heading {
    text-align: left;
  }

  .redeem-code-section__sub-heading {
    text-align: left;
    margin-bottom: 0;
  }

  .redeem-code-section__form {
    padding: 2rem 0;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  .redeem-code-section__submit-code-button {
    align-self: end;
  }

  .redeem-code-section__subscript {
    font-size: 0.75rem;

    @media (min-width: $max-width-mobile) {
      font-size: 0.875rem;
    }
  }
</style>
