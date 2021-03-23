<template>
  <div class="py-20">
    <h3 class="text-3xl font-bold">
      Схема работы
    </h3>
    <div class="flex flex-col-reverse mt-10 lg:flex-row">
      <div class="pl-5 lg:w-1/2">
        <div class="border-blue-100" style="border-left-width: 3px">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="flex items-center justify-between space-y-4">
            <span class="flex items-center justify-center w-10 h-10 -mb-1 font-bold text-white rounded-full bg-gradient-span " style="margin-left: -22px">{{ item.id }}</span>
            <span class="flex items-center w-10/12 h-20 px-5 text-lg rounded-xl" style="box-shadow: 0 10px 20px rgba(41, 41, 42, 0.07);">{{ item.title }}</span>

          </div>

        </div>
      </div>

      <div class="flex items-center justify-center lg:justify-end lg:w-1/2">
        <img
          v-lazy-load
          class="w-9/12"
          data-src="/content/schema-about.svg" />
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
        title: 'Заполнить форму – Запрос',
        icon: '/icon/s1.svg'
      },
      {
        id: 2,
        title: 'Поиск',
        icon: '/icon/s2.svg'
      },
      {
        id: 3,
        title: 'Расчет себестоимости с учетом доставки и таможенной очистки',
        icon: '/icon/s3.svg'
      },
      {
        id: 4,
        title: 'Составление договора',
        icon: '/icon/s4.svg'
      },
      {
        id: 5,
        title: 'Оплата',
        icon: '/icon/s5.svg'
      },
      {
        id: 6,
        title: 'Отгрузка товара на склад клиента',
        icon: '/icon/s6.svg'
      },
    ]
  })
}
</script>

