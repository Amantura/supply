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
      class="object-cover w-full min-h-32"
      data-src="/content/bg-business.png" />

    <div class="py-20 app-container">
      <h1 class="mb-5 text-4xl font-bold uppercase md:text-center lg:mb-20 app-text">
        Секторы бизнеса
      </h1>

      <div class="flex flex-wrap">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="w-full mt-4 md:px-5 md:w-1/2">

          <h3 class="my-4 text-2xl font-bold uppercase app-text">
            {{
              item.title
            }}
          </h3>

          <p>
            {{ item.text }}
          </p>

        </div>
      </div>
    </div>

    <div class="app-container">
      <FilterProjects />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Оборудование для производства',
        text: 'Поможем закупить от крупных до малогабаритных машин, в том числе: производственные станки специального (лабораторное оборудование, для сельского хозяйства) и общего назначения (погрузочно-разгрузочное, турбины, насосы, компрессоры и т.д)'
      },
      {
        title: 'Крупногабаритное оборудование',
        text: 'Поможем при закупке и поставке  специальной техники для любых отраслей: лесозаготовительной, дорожно-строительной, машин для строительства промышленных сооружений и т.д'
      },
      {
        title: 'Обустройство HORECA под ключ',
        text: 'Специализированное оборудование и приспособления для ресторанов и гостиниц, а также одноразовые ресторанные и гостиничные наборы.'
      },
      {
        title: 'Поставка облицовочных материалов',
        text: 'Supply Plus предлагает к поставке облицовочный материал – природный камень гранит. '
      },
    ],
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
