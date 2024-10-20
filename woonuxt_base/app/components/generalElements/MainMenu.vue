<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav class="main-nav">
    <NuxtLink to="/products">{{ $t('messages.general.allProducts') }}</NuxtLink>
    <NuxtLink to="/categories">{{ $t('messages.shop.category', 2) }}</NuxtLink>
    <NuxtLink to="/contact">{{ $t('messages.general.contact') }}</NuxtLink>
    <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
  </nav>
</template>

<style scoped>
.main-nav {
  font-family: "FixelText-SemiBold", sans-serif;
  font-size: 16px;
  line-height:24px;
  font-weight:600;
  color:#212121;
  vertical-align: baseline;
  outline: 0;
  background-color: transparent;
}
</style>
