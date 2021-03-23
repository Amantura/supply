<template>
  <div class="w-full -mt-64">
    <client-only>
      <carousel-3d
        :border="0"
        :perspective="0"
        :space="450"
        :inverse-scaling="450"
        :width="330"
        :height="440"
        :start-index="2"
        :autoplay="true"
        :autoplay-timeout="4000"
        :animation-speed="1000"
        class="pb-20"
        :display="5">
        <slide
          v-for="(item, id) in items"
          :key="id"
          class="mb-20 overflow-hidden rounded-xl"
          style="border-radius: 20px; filter: drop-shadow(0 10px 20px rgba(41, 41, 42, 0.07)); overflow: hidden"

          :index="id">
          <img
            v-lazy-load
            class="object-cover w-full h-full"
            :data-src="item.img" />
        </slide>
      </carousel-3d>
    </client-only>
  </div>
</template>


<script>
export default {
  data: () => ({
    items: [
      {
        img: '/content/cert1.png'
      },
      {
        img: '/content/cert2.png'
      },
      {
        img: '/content/cert3.png'
      },
      {
        img: '/content/cert4.png'
      },
      {
        img: '/content/cert5.png'
      },
    ]
  })
}
</script>
