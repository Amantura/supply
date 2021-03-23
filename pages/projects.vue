<template>
  <div>
    <transition
      enter-active-class="transition-transform duration-300 ease-out transform"
      leave-active-class="transition-transform duration-300 ease-in transform"
      enter-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <Loader v-if="loader" />
    </transition>
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


<script>
export default {
  data: () => ({
    loader: false
  }),
  created() {
    this.loader = true
  },
  mounted() {
    setTimeout(() => {
      this.loader = false
    }, 500)
  }
}
</script>

