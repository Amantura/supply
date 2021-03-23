<template>
  <div class="flex px-10 py-20 space-x-8 bg-center bg-no-repeat bg-cover rounded-3xl" style="background-image: url('/content/form-bg.png')">

    <div class="w-1/2">
      <h3 class="text-xl font-bold text-white">
        Наша миссия - полноценное содействие развитию международного бизнеса путем организации поставок из Китая.
      </h3>
    </div>

    <div class="w-1/2">
      <form class="flex flex-col">
        <label>
          <input
            required

            type="text"
            class="w-full px-4 py-5 focus:outline-none rounded-2xl"
            placeholder="Имя" />
        </label>

        <label>
          <input
            v-mask="'+996 ### ## ## ##'"
            required
            type="text"
            class="w-full px-4 py-5 mt-5 focus:outline-none rounded-2xl"
            placeholder="Телефон" />
        </label>

        <button class="py-3 mt-10 text-white bg-black focus:outline-none rounded-2xl">
          Начать сотрудничество
        </button>

      </form>
    </div>
  </div>
</template>
