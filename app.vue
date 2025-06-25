<template>
  <h1 class="visually-hidden">Starbucks Rewards</h1>
  <Header active-nav-item="rewards" />
  <CookiesModal />
  <main>
    <Hero />
    <div class="sections">
      <SectionGettingStarted />
      <SectionFavorites />
      <SectionExtras />
      <SectionEarnStars />
      <SectionRedeemCode />
      <SectionTermsOfService />
    </div>
  </main>
  <Footer />
</template>

<style style="scss">
  .sections section:nth-of-type(even) {
    background-color: #f1f8f5;
  }
</style>
