<template>
  <div class="py-10 bg-gray-100">
    <div class="app-container">
      <h3 class="text-3xl font-bold uppercase app-text">
        Недавние проекты
      </h3>
    </div>

    <div ref="free" class="w-full px-20">

      <div class="flex w-full py-10 space-x-20">
        <div
          v-for="(item ,id) in items"
          :key="id"
          class="embla_slide "
        >


          <div class="flex flex-col w-80 ">
            <img src="/content/border-s.svg" class="object-cover w-full mb-5" />
            <img
              class="w-full bg-white"
              :src="item.img"
              :alt="item.title" />
            <h3 class="mt-4 text-xl font-bold uppercase app-text">{{ item.title }}</h3>


            <h4 class="py-5 mt-10 text-gray-400 border-b-2 border-gray-300">
              {{ item.city }}
            </h4>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>

import EmblaCarousel from 'embla-carousel'
export default {
  data: () => ({
    items: [
      {
        title: 'ПЭУ Бишкекводоканал',
        city: 'Бишкек / Кыргызстан',
        img: '/img/vodo.png',
        url: '#',
      },
      {
        title: 'ОАО “Кыргызтелеком”',
        city: 'Бишкек / Кыргызстан',
        img: '/img/tele.png',
        url: '#',
      },
      {
        title: 'Лебединовский Айыл Окмоту',
        city: 'Бишкек / Кыргызстан',
        img: '/img/x.png',
        url: '#',
      },
      {
        title: 'ОАО "МАМ"',
        city: 'Бишкек / Кыргызстан',
        img: '/img/manas.png',
        url: '#',
      },
      {
        title: 'Ошгу',
        city: 'Ош / Кыргызстан',
        img: '/img/x2.png',
        url: '#',
      },
      {
        title: 'ЗАО "Альфа Телеком"',
        city: 'Бишкек / Кыргызстан',
        img: '/img/mega.png',
        url: '#',
      },
      {
        title: 'ГП "Центральная лаборатория" при Государственном комитете промышленности, энергетики и недропользования КР',
        city: 'Бишкек / Кыргызстан',
        img: '/img/circle.png',
        url: '#',
      },
      {
        title: 'ОАО “Айыл Банк”"',
        city: 'Бишкек / Кыргызстан',
        img: '/img/ayil.png',
        url: '#',
      },
      {
        title: 'ОАО “РСК Банк”',
        city: 'Бишкек / Кыргызстан',
        img: '/img/rsk.png',
        url: '#',
      },
      {
        title: 'МЦ “Тазалык”',
        city: 'Бишкек / Кыргызстан',
        img: '/img/taza.png',
        url: '#',
      },
      {
        title: 'ГП “Инфоком”',
        city: 'Бишкек / Кыргызстан',
        img: '/img/info.png',
        url: '#',
      },
      {
        title: 'Национальный центр кардиологии и терапии”',
        city: 'Бишкек / Кыргызстан',
        img: '/img/x3.png',
        url: '#',
      },
      {
        title: 'Городская геникологическая больница',
        city: 'Бишкек / Кыргызстан',
        img: '/img/l.png',
        url: '#',
      },
      {
        title: 'ОсОО “МОСТ-ГРУПП”',
        city: 'Бишкек / Кыргызстан',
        img: '/img/mg.png',
        url: '#',
      },
      {
        title: 'Карасуйский РУВХ',
        city: 'Бишкек / Кыргызстан',
        img: '/img/x4.png',
        url: '#',
      },
      {
        title: 'Кеминское РУВХ',
        city: 'Бишкек / Кыргызстан',
        img: '/img/x5.png',
        url: '#',
      },
      {
        title: 'ОАО «НЭСК»',
        city: 'Бишкек / Кыргызстан',
        img: '/img/hk.png',
        url: '#',
      },
      {
        title: 'МП «Бишкекасфальсервис»',
        city: 'Бишкек / Кыргызстан',
        img: '/img/bish.png',
        url: '#',
      },
      {
        title: 'ЗАО «Аллор-Строй-Сервис»',
        city: 'Бишкек / Кыргызстан',
        img: '/img/x7.png',
        url: '#',
      },
      {
        title: 'Войсковая часть 33665 ГКДО КР',
        city: 'Бишкек / Кыргызстан',
        img: '/img/x6.png',
        url: '#',
      },
      {
        title: 'стройтель компания - ихлас',
        city: 'Бишкек / Кыргызстан',
        img: '/img/ihlas.png',
        url: '#',
      },
      {
        title: 'ОсОО «Шнос»',
        city: 'Бишкек / Кыргызстан',
        img: '/img/petr.png',
        url: '#',
      },

    ],


    options: {
      dragFree: true,
      containScroll: 'trimSnaps'
    },

  }),

  destroyed() {
    if (this.embla) {
      this.embla.destroy()
    }
  },


  mounted() {
    this.sliderInit()
  },


  methods: {
    sliderInit() {
      this.embla = EmblaCarousel(this.$refs.free, this.options)
    },

  },
}
</script>

