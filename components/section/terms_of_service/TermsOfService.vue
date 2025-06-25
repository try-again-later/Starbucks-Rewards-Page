<script setup lang="ts">
  import SubSectionHeading from './SubSectionHeading.vue';
  import SubSectionParagraph from './SubSectionParagraph.vue';
  import Link from '~/components/Link.vue';
</script>

<template>
  <section class="terms-of-service-section">
    <h2 class="visually-hidden">Terms of service</h2>

    <div class="terms-of-service-section__container">
      <h3 class="terms-of-service-section__sub-heading">
         At participating stores. Restrictions apply.
      </h3>
    </div>

    <div class="terms-of-service-section__container">
      <div class="terms-of-service-section__sub-section">
        <SubSectionHeading class="terms-of-service-section__sub-section-heading">
          Earning stars
        </SubSectionHeading>

        <SubSectionParagraph>
          Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.
        </SubSectionParagraph>

        <SubSectionParagraph>
          Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash,
          credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per
          $1 spent when you link a payment method and pay directly through the app.
        </SubSectionParagraph>

        <SubSectionParagraph>
           Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in
           the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating
           store with your registered physical Starbucks Card or scan your member barcode in the
           app, and then use any physical Starbucks Card (regardless of whether it is registered) to
           complete the purchase.
        </SubSectionParagraph>
      </div>

      <div class="terms-of-service-section__sub-section">
        <SubSectionHeading class="terms-of-service-section__sub-section-heading">
          Terms of use
        </SubSectionHeading>

        <SubSectionParagraph>
          For full program details visit
          <Link variant="primary" href="https://try-again-later.github.io">
            starbucks.com/rewards/terms
          </Link>.
        </SubSectionParagraph>

        <SubSectionParagraph>
          * Earn 1 Star per $1 when digitally loading your Starbucks Card with your
          Starbucks<sup>&reg;</sup> Rewards Visa<sup>&reg;</sup> Card: See your Card Rewards Program
          Agreement for more details.
        </SubSectionParagraph>

        <SubSectionParagraph>
          Starbucks<sup>&reg;</sup> Rewards benefits are available at participating Starbucks
          stores. Not all stores have the ability to honor Rewards at this time. Visit the
          <Link variant="primary" href="https://try-again-later.github.io">
            Starbucks Store Locator
          </Link>
          and search for locations honoring “Redeem Rewards”.
        </SubSectionParagraph>
      </div>

      <div class="terms-of-service-section__sub-section">
        <SubSectionHeading class="terms-of-service-section__sub-section-heading">
          Benefits
        </SubSectionHeading>

        <SubSectionParagraph>
          Free refills available during same in-store visit only. To qualify for the
          Birthday Reward, you must have made at least one Star-earning transaction.
        </SubSectionParagraph>
      </div>

      <div class="terms-of-service-section__sub-section">
        <SubSectionHeading class="terms-of-service-section__sub-section-heading">
          Redeeming rewards
        </SubSectionHeading>

        <SubSectionParagraph>
          Rewards cannot be redeemed for alcoholic beverages or multi-serve items.
          Not all stores honor tiered Rewards.
          Select stores redeem 150 Stars for free food or drink items only.
        </SubSectionParagraph>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .terms-of-service-section {
    font-size: 0.75rem;
    padding: 3rem 1.5rem;
    color: $color-muted;

    @media (min-width: $max-width-mobile) {
      font-size: 0.875rem;
    }
  }

  .terms-of-service-section__container {
    max-width: $max-width-mobile * 0.75;
    margin: 0 auto;
    display: grid;
    gap: 1.25rem 2rem;

    @media (min-width: $max-width-mobile) {
      grid-template-columns: repeat(2, 1fr);
      max-width: $max-width-desktop;
    }
  }

  .terms-of-service-section__sub-heading {
    font-weight: 400;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .terms-of-service-section__sub-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
