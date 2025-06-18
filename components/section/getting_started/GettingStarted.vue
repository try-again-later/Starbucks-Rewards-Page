<script setup lang="ts">
  import Link from '~/components/Link.vue';
  import List from './List.vue';
  import ListItem from './ListItem.vue';
</script>

<template>
  <section class="section">
    <SectionHeading variant="large">Getting started is easy</SectionHeading>
    <p class="sub-heading">Earn Stars and get rewarded in a few easy steps.</p>

    <List>
      <ListItem>
        <template #heading>Download the Starbucks<sup>&reg;</sup> app</template>
        <template #content>
          <Link href="#">Join in the app</Link>
          to get access to the full range of Starbucks® Rewards benefits.
          You can also <Link href="#">join online</Link>.
        </template>
      </ListItem>

      <ListItem>
        <template #heading>Order and pay how you'd link</template>
        <template #content>
          Use cash, credit/debit card or save some time and pay right through the app.
          You'll collect Stars all ways.
          <Link href="#">Learn how</Link>
        </template>
      </ListItem>

      <ListItem>
        <template #heading>Earn Stars, get Rewards</template>
        <template #content>
          As you earn Stars, you can redeem them for Rewards&mdash;like free food, drinks, and more.
          Start redeeming with as little as 25 Stars!
        </template>
      </ListItem>
    </List>
  </section>
</template>

<style scoped lang="scss">
  .sub-heading {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  .section {
    padding: 3rem 1.5rem;
  }
</style>
