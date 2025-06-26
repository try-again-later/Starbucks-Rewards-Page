<script setup lang="ts">
  import ScanAndPay from './images/scan-and-pay.png';
  import SavePayment from './images/save-payment.png';
  import Preload from './images/preload.png';
  import RegisterGiftCard from './images/register-gift-card.png';
  import CreditCard from './images/credit-card.png';

  import Link from '~/components/Link.vue';
</script>

<template>
  <section class="earn-stars-section">
    <SectionHeading variant="large">Cash or card, you earn Stars</SectionHeading>
    <SectionSubHeading>
      No matter how you pay, you can earn Stars with your morning coffee.
      Those Stars add up to (really delicious) Rewards.
    </SectionSubHeading>

    <div class="earn-stars-section__container">
      <div class="earn-stars-sub-section">
        <div>
          <SectionHeading variant="small" class="earn-stars-sub-section__heading">
            1★ per dollar
          </SectionHeading>
          <SectionSubHeading class="earn-stars-sub-section__sub-heading">
            Pay as you go
          </SectionSubHeading>
        </div>

        <ul class="earn-stars-section__items-list">
          <SectionEarnStarsItem :image="ScanAndPay">
            <template #heading>Scan and pay separately</template>
            <template #description>Use cash or credit/debit card at the register.</template>
          </SectionEarnStarsItem>

          <SectionEarnStarsItem :image="SavePayment">
            <template #heading>Save payment in the app</template>
            <template #description>
              Check-out faster by saving a credit/debit card or PayPal to your account.
              You’ll be able to order ahead or scan and pay at the register in one step.
            </template>
          </SectionEarnStarsItem>
        </ul>
      </div>

      <hr class="earn-stars-section__separator">

      <div class="earn-stars-sub-section">
        <div>
          <SectionHeading variant="small" class="earn-stars-sub-section__heading">
            2★ per dollar
          </SectionHeading>
          <SectionSubHeading class="earn-stars-sub-section__sub-heading">
            Add funds in the app
          </SectionSubHeading>
        </div>

        <ul class="earn-stars-section__items-list">
          <SectionEarnStarsItem :image="Preload">
            <template #heading>Preload</template>
            <template #description>
              To save time and earn Stars twice as fast, add money to your digital Starbucks Card
              using any payment option. Scan and pay in one step or order ahead in the app.
            </template>
          </SectionEarnStarsItem>

          <SectionEarnStarsItem :image="RegisterGiftCard">
            <template #heading>Register your gift card</template>
            <template #description>
              Then use it to pay through the app. You can even consolidate balances from multiple
              cards in one place.
            </template>
          </SectionEarnStarsItem>
        </ul>
      </div>

      <hr class="earn-stars-section__separator">

      <div class="earn-stars-sub-section">
        <div>
          <SectionHeading variant="small" class="earn-stars-sub-section__heading">
            Up to 3★ per dollar
          </SectionHeading>
          <SectionSubHeading class="earn-stars-sub-section__sub-heading">
            With Starbucks<sup>&reg;</sup> Rewards Visa<sup>&reg;</sup> Card
          </SectionSubHeading>
        </div>

        <ul class="earn-stars-section__items-list">
          <SectionEarnStarsItem :image="CreditCard">
            <template #heading>Earn Stars even faster</template>
            <template #description>
              Earn Stars on all purchases you make with our
              <Link variant="primary" href="https://try-again-later.github.io">credit card</Link>
              opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally
              preload your Starbucks Card with your Starbucks<sup>&reg;</sup>
              Rewards Visa<sup>&reg;</sup> Card, and earn 2 Stars per $1 when you pay with that
              preloaded Starbucks Card.
            </template>
          </SectionEarnStarsItem>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .earn-stars-section {
    padding: 3rem 1.5rem;
  }

  .earn-stars-section__container {
    max-width: $max-width-desktop;
    margin: 0 auto;
  }

  .earn-stars-sub-section {
    display: grid;
    gap: 2rem;

    @media (min-width: $max-width-mobile) {
      grid-template-columns: $max-width-mobile * 0.25 auto;
    }
  }

  .earn-stars-sub-section__heading {
    text-align: left;
    margin-bottom: 0.5em;
  }

  .earn-stars-sub-section__sub-heading {
    text-align: left;
  }

  .earn-stars-section__items-list {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .earn-stars-section__separator {
    border: none;
    width: 100%;
    height: 2px;
    background-color: $color-disabled;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>
