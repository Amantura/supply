<template>
  <div>
    <img
      v-lazy-load
      data-src="/content/bg-projetcs.png"
      class="object-cover w-full" />
    <div>
      <FreeCarousel />
    </div>

    <div class="app-container">
      <filter-projects />
    </div>
  </div>
</template>
