<template>
  <div class="fixed inset-x-0 top-0 z-50 w-full app-bg top-nav">
    <div class="flex justify-between h-full app-container">
      <div class="flex items-center h-full">
        <button class="h-full pr-4 mr-4 border-r outline-none md:hidden focus:outline-none" @click="toggleDrawer">
          <img src="/icon/burger.png" />
        </button>
        <nuxt-link to="/">
          <img src="/content/logo.svg" alt="supply logo" />
        </nuxt-link>
      </div>

      <nav class="flex items-center h-full space-x-4 font-semibold text-white">
        <nuxt-link
          v-for="(link, idx) in items"
          :key="idx"
          class="hidden uppercase md:block"
          exact-active-class="text-blue-500"
          :to="link.to">
          {{ link.title }}
        </nuxt-link>
      </nav>

      <div class="flex items-center h-full space-x-2 font-semibold text-white">
        <div>
          <nuxt-link class="text-blue-500" to="#">
            RU
          </nuxt-link>
        </div>
        <div class="bg-white" style="width: 1px; height: 25px"></div>
        <div>
          <nuxt-link to="#">
            EN
          </nuxt-link>
        </div>
        <div class="bg-white" style="width: 1px; height: 25px"></div>
        <div>
          <nuxt-link to="#">
            CH
          </nuxt-link>
        </div>
      </div>
    </div>
    <Drawer ref="drawer" @close="closeDrawer" />
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'О нас', to: '/about' },
      { title: 'Проекты', to: '/projects' },
      { title: 'Секторы бизнеса', to: '/business-sectors' },
      { title: 'Контакты', to: '/contacts' },
    ],
    drawer: false
  }),
  methods: {
    toggleDrawer() {
      this.$refs.drawer.toggle()
      this.drawer = !this.drawer
    },
    closeDrawer() {
      this.drawer = false
    }
  }
}
</script>
