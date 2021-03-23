<template>
  <div class="pb-20">
    <h2 class="text-5xl font-bold">
      Услуги для бизнеса
    </h2>

    <div class="flex mt-20 space-x-8">

      <div
        v-for="item in items"
        :key="item.id"
        class="relative w-1/3 p-10 py-20 space-y-3 rounded-xl"
        style="box-shadow: 0 10px 20px rgba(41, 41, 42, 0.07);">
        <svg
          class="absolute -top-4 right-5"
          width="82"
          height="95"
          viewBox="0 0 82 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M14 16V0L0 16H14Z" fill="#1361AB" />
          <path d="M82 0H14V95L48 73.5L82 95V0Z" fill="#1A86EB" />
        </svg>

        <div class="flex items-center justify-center w-10 h-10 text-xl font-bold text-blue-500 bg-blue-100 rounded-full">{{ item.id }}</div>
        <h3 class="py-5 text-2xl font-bold">{{ item.title }}</h3>

        <p
          v-for="(text, idx ) in item.text"
          :key="idx"
          class="flex space-x-4">
          <span class="flex items-center justify-center text-sm text-green-500 bg-green-100 rounded-full w-7 h-7"><i class="fas fa-check"></i></span>
          <span class="w-10/12">{{ text.value }}</span>
        </p>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        title: 'Найдем производителя любого товара в Китае',
        text: [
          {
            value: 'Supply Plus поможет найти надежного производителя и поставщика в кратчайшие сроки'
          },
          {
            value: 'По вашему желанию мы сами совершим выкуп товара'
          },
          {
            value: 'Полностью выстроим логистику доставки от завода до нужной вам точки'
          },
        ]

      },
      {
        id: 2,
        title: 'Сопровождение бизнеса в Китае',
        text: [
          {
            value: 'Сделаем вашу бизнес-поездку максимально продуктивной, спланировав все “от и до” на любой срок пребывания'
          },
          {
            value: 'Поможем организовать все: от покупки билета и получения визы до бронирования отеля'
          },
          {
            value: 'Организуем любые переводческие услуги, предоставим в том числе и гида'
          },
          {
            value: 'Поиск инвесторови партнеров на рынке Китая'
          },
        ]

      },
      {
        id: 3,
        title: 'Инспекции, контроль качества фабрик и поставщиков в Китае ',
        text: [
          {
            value: 'Поможем выбрать оптимальный вариант доставки товаров в вашу страну'
          },
          {
            value: 'Проведем контроль качества упаковки товара при отгрузке'
          },
          {
            value: 'Совершим инспекцию товаров перед отправкой'
          },
        ]

      },
    ]
  })
}
</script>
