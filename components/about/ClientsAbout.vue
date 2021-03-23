<template>
  <div class="my-20">

    <h2 class="text-4xl font-bold">
      НАШИ ПАРТНЕРЫ
    </h2>

    <div class="my-10">
      <img v-lazy-load data-src="/content/border.svg" />
    </div>

    <div class="flex flex-wrap space-y-10">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex items-center justify-center w-1/2 md:w-1/3 lg:w-3/12">
        <img :src="item.img" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { img: '/brand/Rsk.svg' },
      { img: '/brand/usaid.svg' },
      { img: '/brand/frunze.svg' },
      { img: '/brand/kia.svg' },
      { img: '/brand/koch.svg' },
      { img: '/brand/petroleum.svg' },
      { img: '/brand/agahan.svg' },
      { img: '/brand/instant.svg' },
      { img: '/brand/kg.svg' },
      { img: '/brand/viraj.svg' },
      { img: '/brand/center.svg' },
      { img: '/brand/karisma.svg' },
      { img: '/brand/jci.svg' },
      { img: '/brand/kant.svg' },
      { img: '/brand/jannat.svg' },
      { img: '/brand/o.svg' },
      { img: '/brand/circle.svg' },
      { img: '/brand/asia.svg' },
      { img: '/brand/bish.svg' },
      { img: '/brand/toyota.svg' },
      { img: '/brand/shoro.svg' },
      { img: '/brand/urfa.svg' },
      { img: '/brand/vodo.svg' },
      { img: '/brand/ihlas.svg' },
      { img: '/brand/ini.svg' },
      { img: '/brand/elite.svg' },
      { img: '/brand/pir.svg' },
      { img: '/brand/Megacom.svg' },
      { img: '/brand/elek.svg' },
      { img: '/brand/bank.svg' },
      { img: '/brand/taza.svg' },
      { img: '/brand/man.svg' },
      { img: '/brand/usaid2.svg' },
      { img: '/brand/m.svg' },
    ]
  })
}
</script>
