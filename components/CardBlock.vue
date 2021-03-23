<template>
  <div class="flex flex-wrap py-10 bg-gray-100 md:px-0 lg:px-5 xl:px-5 2xl:px-10">

    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="flex flex-col w-full px-4 mb-6 lg:mb-0 md:w-1/2 lg:w-3/12">

      <h2 class="text-xl font-bold uppercase app-text">
        {{ item.title }}
      </h2>

      <div class="w-full my-4">
        <img
          src="/content/bg.svg"
          class="w-full"
          alt="" />
      </div>

      <img
        class="w-full mb-5"
        style="width: 100% !important"
        :src="item.img"
        :alt="item.title" />

      <p>{{ item.text }}</p>

      <nuxt-link class="flex items-center mt-20" to="#">
        <span class="pb-1 uppercase">
          читать подробнее
        </span>
        <i class="ml-2 fas fa-chevron-right"></i>
      </nuxt-link>

    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Оборудование для производства',
        img: '/content/card1.png',
        text: 'Поможем закупить как крупногабаритные, так и малогабаритные машины, в том числе: производственные станки специального (лабораторное оборудование, для сельского хозяйства) и общего назначения (погрузочно-разгрузочное, турбины, насосы, компрессоры и т.д)',
        link: '#',
      },
      {
        title: 'Крупногабаритное оборудование',
        img: '/content/card2.png',
        text: 'Поможем при закупке и поставке  специальной техники для любых отраслей: лесозаготовительной, дорожно-строительной, машин для строительства промышленных сооружений и т.д',
        link: '#',
      },
      {
        title: 'Обустройство HOreCA под ключ',
        img: '/content/card3.png',
        text: 'Специализированное оборудование и приспособления для ресторанов и гостиниц, а также одноразовые ресторанные и гостиничные наборы. ',
        link: '#',
      },
      {
        title: 'Поставка облицовочных материалов',
        img: '/content/card4.png',
        text: 'Supply Plus предлагает к поставке облицовочный материал – природный камень гранит.',
        link: '#',
      }
    ]
  })
}
</script>
