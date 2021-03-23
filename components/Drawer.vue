<template>
  <transition
    name="over"
    mode="out-in"
  >
    <div
      v-show="drawer"
      class="fixed inset-x-0 w-full h-screen over"
      style="background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(20px)"
      @click.self="close">
      <transition
        name="drawer"
        enter-active-class="transition-transform duration-300 ease-out transform"
        leave-active-class="transition-transform duration-300 ease-in transform"
        enter-class="-translate-x-8"
        leave-to-class="-translate-x-8"
        mode="out-in">
        <div v-show="drawer" class="flex flex-col w-full h-full px-4 text-white border-t app-bg drawer md:w-96">
          <button
            class="flex items-center justify-between px-5 py-5 text-white border-b border-white"
            @click="linked('/about')">
            О нас <i class="far fa-arrow-right"></i>
          </button>
          <button
            class="flex items-center justify-between px-5 py-5 text-white border-b border-white"
            @click="linked('/projects')">
            Проекты <i class="far fa-arrow-right"></i>
          </button>
          <button
            class="flex items-center justify-between px-5 py-5 text-white border-b border-white"
            @click="linked('/business-sectors')">
            Секторы бизнеса<i class="far fa-arrow-right"></i>
          </button>
          <button
            class="flex items-center justify-between px-5 py-5 text-white border-b border-white"
            @click="linked('/contacts')">
            Контакты <i class="far fa-arrow-right"></i>
          </button>

        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),

  methods: {
    toggle() {
      this.drawer = !this.drawer
    },
    close() {
      this.drawer = false
      this.$emit('close', false)
    },
    linked(link) {
      this.$router.push(link)
      this.close()
    }
  }
}
</script>

<style>
.over {
  top: 64px;
  height: calc(100vh - 48px);
}

@media (min-width: 768px) {
  .over {
    top: 70px;
  }
}

.over-enter-active {
  transition: all 0.5s ease-in;
  transform: translateX(0);
}

.over-leave-active {
  transition: all 0.3s ease-out;
  opacity: 0;
}

.drawer-enter-active {
  transition: all 0.5s ease-in;
  transform: translateX(0);
}

.drawer-leave-active {
  transition: all 0.5s ease-out;
  opacity: 0;
}
</style>
