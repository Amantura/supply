<template>
  <div>
    <h2 class="text-4xl font-bold text-center">
      Доставляем товары<br />
      <span class="text-blue-500">собственной логистической службой</span>
    </h2>

    <div class="flex flex-wrap mt-10 ">

      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="w-full p-3 md:w-1/2 lg:w-3/12">
        <div
          class="flex flex-col items-center justify-center h-full py-10 space-y-3 bg-white rounded-2xl"
          style="box-shadow: 0 30px 40px rgba(212, 217, 232, 0.2);">
          <img
            v-lazy-load
            :data-src="item.icon"
            :alt="item.title" />
          <h3 class="font-semibold">{{ item.title }}</h3>
          <p>{{ item.text }}</p>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: '/icon/card1.svg',
        title: 'Экспресс',
        text: 'от 3 дней, до 25 кг'
      },
      {
        icon: '/icon/card2.svg',
        title: 'Авиа',
        text: 'от 5 дней'
      },
      {
        icon: '/icon/card3.svg',
        title: 'Авто',
        text: 'от 8 дней'
      },
      {
        icon: '/icon/card4.svg',
        title: 'Ж/Д',
        text: 'от 12 дней'
      },
    ]
  })
}
</script>
