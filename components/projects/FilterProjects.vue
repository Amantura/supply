<template>
  <div class="py-32">
    <h3 class="mb-5 text-3xl font-bold uppercase app-text">
      НАШИ ПРОЕКТЫ
    </h3>
    <div>
      <img
        v-lazy-load
        data-src="/content/border.svg"
        class="w-full" />
      <div class="flex flex-wrap py-5 lg:justify-around app-text">
        <button
          v-for="f in filter"
          :key="f.key"
          class="w-1/2 mb-3 text-left duration-200 outline-none md:px-5 lg:mb-0 md:text-center md:w-4/12 lg:w-3/12 focus:outline-none"
          :class="{'font-semibold': active_button === f.key}"
          @click="active_button = f.key">
          {{ f.title }}
        </button>
      </div>
      <img
        v-lazy-load
        data-src="/content/border.svg"
        class="w-full" />
    </div>

    <div>
      <CommerceProjects v-if="active_button === 'PM'" />
      <FilterData v-else :data="filterData" />
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    active_button: 'KO',
    filter: [
      {
        title: 'Крупногабаритное оборудование',
        key: 'KO'
      },
      {
        title: 'Сувенирная продукция',
        key: 'SP'
      },
      {
        title: 'Оборудование для производства',
        key: 'OP'
      },
      {
        title: 'Поставка облицовочных материалов ',
        key: 'PM'
      },
    ],

    items: [
      { img: '/img/hk.png', title: 'оао “НЭСk”', text: 'Поставка спецтехники ', year: '2019 год ', key: 'KO', city: 'Бишкек / Кыргызстан' },
      { img: '/img/mg.png', title: 'Осоо “Мост групп”', text: 'Поставка бульдозера Shantui', year: '2019 год ', key: 'KO', city: 'Бишкек / Кыргызстан' },
      { img: '/img/kia.png', title: 'KIA Motors Бишкек', text: 'Поставка сувенирной продукции на Новый год', year: '2020 год ', key: 'SP', city: 'Бишкек / Кыргызстан' },
      { img: '/img/petr.png', title: 'Bishkek Petroleum', text: 'Поставка сувенирной продукции и бизнес подарков', year: '2021 год ', key: 'SP', city: 'Бишкек / Кыргызстан' },
      { img: '/img/kg.png', title: 'Страховая компания "Кыргызстан"', text: 'Поставка сувенирной продукции с брендированием', year: '2020 год ', key: 'SP', city: 'Бишкек / Кыргызстан' },
      { img: '/img/toyota.png', title: 'Тойота Центр Бишкек', text: 'Поставка сувенирной продукции на мероприятие - Ironman Triathlon 2020 ', year: '2020 год ', key: 'SP', city: 'Бишкек / Кыргызстан' },
      { img: '/img/lkw.png', title: 'LKW Center', text: 'Поставка подарков с брендированием на Новый год', year: '2020 год ', key: 'SP', city: 'Бишкек / Кыргызстан' },
      { img: '/img/kl.png', title: 'ГП "КЫЯЛ"', text: 'Поставка широкоформатного принтера', year: '2020 год ', key: 'OP', city: 'Бишкек / Кыргызстан' },
    ]
  }),

  computed: {
    filterData() {
      const i = this.items.filter(i => i.key === this.active_button)
      return i
    }
  }
}
</script>
