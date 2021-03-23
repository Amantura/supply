<template>
  <div class="flex flex-wrap py-10">
    <div
      v-for="(item, idx) in data"
      :key="idx"
      class="w-full mb-10 lg:w-4/12 md:w-1/2 md:pr-7">
      <img
        v-lazy-load
        class="object-cover w-full h-64 border rounded"
        :data-src="item.img" />
      <h3 class="my-3 font-bold uppercase app-text">{{ item.title }}</h3>
      <div class="flex mt-5">
        <span class="w-4/12">
          Объем работ:
        </span>
        <span class="w-8/12 font-semibold uppercase app-text ">
          {{ item.text }}
        </span>
      </div>

      <div class="flex mt-5">
        <span class="w-4/12">
          Выполнен:
        </span>
        <span class="w-8/12 font-semibold app-text ">
          {{ item.year }}
        </span>
      </div>

      <h3 class="pb-5 text-gray-400 border-b-2 border-gray-300 mt-7">
        {{ item.city }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
