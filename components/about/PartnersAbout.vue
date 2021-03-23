<template>
  <div class="my-20">

    <h2 class="text-4xl font-bold">
      НАШИ ПАРТНЕРЫ
    </h2>

    <div class="my-10">
      <img src="/content/border.svg" />
    </div>

    <div class="flex flex-wrap space-y-10">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex items-center justify-center w-1/2 p-4 md:w-1/3 lg:w-3/12">
        <img v-lazy-load :data-src="item.img" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { img: '/brand/integra.svg' },
      { img: '/brand/lising.svg' },
      { img: '/brand/shacman.svg' },
      { img: '/brand/Ayilbank.svg' },
      { img: '/brand/smart.svg' },
      { img: '/brand/zoom.svg' },
      { img: '/brand/sinomach.svg' },
      { img: '/brand/auxs.svg' },
      { img: '/brand/omedia.svg' },
      { img: '/brand/yutong.svg' },
      { img: '/brand/san.svg' },
      { img: '/brand/mg.svg' },
      { img: '/brand/ooba.svg' },
      { img: '/brand/oasis.svg' },
      { img: '/brand/ptc.svg' },
      { img: '/brand/global.svg' },
      { img: '/brand/geek.svg' },
      { img: '/brand/amantrade.svg' },
      { img: '/brand/happy.svg' },
      { img: '/brand/zoomlion.svg' },
      { img: '/brand/vortec.svg' },
      { img: '/brand/general.svg' },
      { img: '/brand/caps.svg' },
    ]
  })
}
</script>
