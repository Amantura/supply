<template>
  <div class="relative flex justify-center w-full">


    <div class="relative w-full embla">

      <button
        class="absolute left-0 z-20 hidden py-5 -mt-5 text-white bg-blue-500 outline-none lg:block px-7 focus:outline-none embla__button embla__button--prev"
        style="top: 50%"
        @click="prev"><i class="fas fa-chevron-left"></i></button>
      <button
        class="absolute right-0 z-20 hidden py-5 -mt-5 text-white bg-blue-500 outline-none lg:block px-7 focus:outline-none embla__button embla__button--next"
        style="top: 50%"
        @click="next"><i class="fas fa-chevron-right"></i></button>


      <div class="absolute z-20 flex justify-center w-full bottom-10">
        <button
          v-for="(dot, id) in dots"
          :key="id"
          type="button"
          class="w-10 h-1 mx-5 bg-gray-400 rounded outline-none focus:outline-none"
          :class="{'bg-blue-500': current === id}"
          @click="setScroll(id)"
        >

        </button>
      </div>

      <div ref="embla" class="w-full embla__viewport">
        <div class="w-full embla__container">

          <div
            v-for="item in items"
            :key="item.text"
            :style="`background-image: url('${item.img}'); background-repeat: no-repeat; background-size: cover; background-position: center center;`"
            class="relative z-0 w-full embla__slide carousel-h">
            <div class="relative h-full app-container">
              <div class="absolute right-0 px-5 lg:w-6/12 py-7 bg-08 bottom-20">
                <img :src="item.icon" :alt="item.text" />

                <div class="flex mt-7">
                  <span class="w-4/12 uppercase">
                    Дата поставки:
                  </span>

                  <span class="w-7/12 font-semibold uppercase ">
                    {{ item.date }}
                  </span>
                </div>

                <div class="flex mt-2">
                  <span class="w-4/12 uppercase">
                    Статус пректа:
                  </span>

                  <span class="w-7/12 font-semibold uppercase ">
                    {{ item.status }}
                  </span>
                </div>

                <div class="flex mt-2">
                  <span class="w-4/12 uppercase">
                    Предмет проекта:
                  </span>

                  <span class="w-7/12 font-semibold uppercase ">
                    {{ item.text }}
                  </span>
                </div>

                <p class="font-bold uppercase mt-7 ">{{ item.city }}</p>
              </div>
            </div>
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
      { img: '/content/Manas.png', icon: '/brand/Manas.svg', date: '11.12.2019', status: 'выполнен', text: '"Разбрызгиватель химических реагентов" для взлетно-посадочной полосы в количестве 10 шт', city: 'Китай' },
      { img: '/content/Telecom.png', icon: '/brand/Telecom.svg', date: '07.07.2020', status: 'выполнен', text: 'Поставка Оптических рефлектометров CuteOTDR-300C, и оптических инструментов к ним', city: 'Китай' },
      { img: '/content/Megacom.png', icon: '/brand/Megacom.svg', date: '09.12.2019', status: 'выполнен', text: 'Поставка кондиционеров канального типа вертикального исполнения Midea MOVA c установкой и мантажом', city: 'Китай' },
      { img: '/content/Rsk.png', icon: '/brand/Rsk.svg', date: '14.06.2019', status: 'выполнен', text: 'Поставка заготовок пластиковых карт для ОАО РСК Банка в количестве 60 000 шт.', city: 'Китай' },
      { img: '/content/Ayilbank.png', icon: '/brand/Ayilbank.svg', date: '14.08.2019', status: 'выполнен', text: 'Поставка бронежилетов "Авангард" для службы охраны ОАО Айыл Банка в количестве 41 штук.', city: 'Китай' },
    ],
    options: {
      loop: true
    },
    dots: undefined,
    current: 0
  }),

  destroyed() {
    if (this.embla) {
      this.embla.destroy()
    }

    // clearInterval(this.interval)
  },


  mounted() {
    this.sliderInit()

    this.dots = this.embla.scrollSnapList()
    this.current = this.embla.selectedScrollSnap()
    // this.interval = setInterval(() => {
    //   this.embla.scrollNext()
    // }, 5000)
  },

  methods: {
    sliderInit() {
      this.embla = EmblaCarousel(this.$refs.embla, this.options)
      this.embla.on('select', () => { this.current = this.embla.selectedScrollSnap() })
    },

    setScroll(id) {
      this.embla.scrollTo(id)
      this.current = id
    },

    prev() {
      this.embla.scrollPrev()
    },

    next() {
      this.embla.scrollNext()
    },

  },


}


</script>

<style>
.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  position: relative;
  flex: 0 0 100%;
}
</style>

