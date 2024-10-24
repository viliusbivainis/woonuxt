<script setup lang="ts">
const items = [
  '/images/banner_1.jpg',
]
const carouselRef = ref()

onMounted(() => {
  // setInterval(() => {
  //   if (!carouselRef.value) return

  //   if (carouselRef.value.page === carouselRef.value.pages) {
  //     return carouselRef.value.select(0)
  //   }

  //   carouselRef.value.next()
  // }, 5000)
})
</script>

<template>
  <div class="w-100">
  <div class="full-width-carousel">
    <UCarousel ref="carouselRef" 
      :items="items" 
      :ui="{ 
        item: 'basis-full',
          indicators: {
            wrapper: 'absolute bottom-4 mt-4'
          } 
      }" 
      class="overflow-hidden w-full mx-auto"
      indicators
      arrows>
    <template #default="{ item }">
      <div class="carousel-item w-full md:h-4/6 relative">
        <NuxtImg
          width="1400"
          height="800"
          class="object-cover w-full h-full"
          :src="item" 
          alt="Hero image"
          loading="eager"
          sizes="sm:100vw md:1400vw"
          fetchpriority="high"
          preload
          draggable="false"
          placeholder
          placeholder-class="blur-xl" />
      <div class="container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none">
        <div class="slider-content px-8">
          <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl">Just landed.</h1>
          <h2 class="text-lg font-bold md:mb-4 lg:text-3xl">The New Year Collection</h2>
          <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance">
            <p>Our latest collection is here. Discover the latest trends and styles for the new year.</p>
          </div>
          <NuxtLink class="px-6 py-3 font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-800" to="/products">Shop now</NuxtLink>
        </div>
      </div>
    </div>
    </template>
    <template #indicator="{ onClick, page, active }">
      <UButton :variant="active ? 'solid' : 'outline'" size="2xs" class="home-indicator" @click="onClick(page)" />
    </template>
  </UCarousel>
  </div>
</div>
  
</template>

<style>
.full-width-carousel{
  overflow:hidden;
  .carousel-item{
    overflow:hidden
  }
  .home-indicator{
    width:30px;
    border-radius:0;
    color:#000;
  }
}
</style>