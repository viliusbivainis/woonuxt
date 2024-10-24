<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav class="main-nav">
    <NuxtLink to="/products">{{ $t('messages.general.allProducts') }}</NuxtLink>
    <NuxtLink to="/categories">{{ $t('messages.shop.category', 2) }}</NuxtLink>
    <NuxtLink to="/susisiekite">{{ $t('messages.general.contact') }}</NuxtLink>
    <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false">Norų sąrašas</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">Mano Paskyra</NuxtLink>
  </nav>
</template>

<style>
.main-nav {
  a{
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 16px;
  line-height:24px;
  font-weight:500;
  color:#212121;
  font-style: normal;
  letter-spacing: .04em;
  border-bottom: 1px solid transparent;
  transition: all .2s ease-in-out;
  padding: 3px 0;
    &:hover{
      border-bottom: 1px solid #212121;
    }
  }
}
</style>
