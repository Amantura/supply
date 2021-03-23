<template>
  <div class="flex flex-wrap pb-32 ">
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="w-full px-3 pt-5 lg:w-3/12 md:w-1/2 ">
      <div class="pl-5 border-l-2 border-blue-500">
        <h3 class="text-2xl font-bold">{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: '2012 год',
        text: 'Выстраивание связей с 5 крупнейшими фабриками уже во время первой бизнес-поездки.'
      },
      {
        title: '2014 год',
        text: 'Сотрудничество более чем с 50 заводами Китая, специализирующихся в различных сферах.'
      },
      {
        title: '2017 год',
        text: 'Стабильное и постоянное сотрудничество более чем с 200 партнерами - производителями из Китая.'
      },
      {
        title: '2020 год',
        text: 'Отлаженная система работы Supply Plus и наращивание направлений, в том числе в виде поставки крупной спецтехники и сувенирной продукции.'
      },
    ]
  })
}
</script>
