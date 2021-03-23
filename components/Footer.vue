<template>
  <div>
    <div class="flex justify-between">
      <div>
        <img src="/content/logo2.svg" />
      </div>

      <div class="flex space-x-4 text-gray-400">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="hidden lg:block">
          <nuxt-link class="w-full font-semibold uppercase" :to="item.link">{{ item.title }}</nuxt-link>

          <div class="hidden mt-2 lg:block">
            <template v-if="item.child && item.child.length > 0">
              <div
                v-for="(child, id) in item.child"
                :key="id"
              >
                <p>{{ child.title }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div>
        <div class="text-gray-400">
          <div class="hidden mb-4 font-semibold uppercase lg:block">Подписывайтесь на нас </div>


          <div class="flex mt-3 space-x-2 lg:mt-0">
            <a
              v-for="(s, i) in socials"
              :key="i"
              :href="s.link"
              class="flex items-center justify-center rounded-full w-7 h-7 bg-01"><i :class="s.icon"></i></a>
          </div>

        </div>
      </div>
    </div>

    <div class="flex justify-between mt-10 border-t-2 border-gray-500 lg:flex-row pt-7">
      <div class="text-gray-400 lg::mt-5 lg:mt-0">
        © 2011 SUPPLY PLUS <br />
        Все права защищены
      </div>

      <div class="flex flex-col text-white md:space-x-4 lg:flex-row">
        <a href="mailto:supplypls@gmail.com">supplypls@gmail.com</a>
        <a href="tel:+996555155677">+996 555 15 56 77</a>

        <div class="hidden lg:block">
          <div class="flex">
            <span>RU</span>
            <svg
              class="ml-2 overflow-hidden rounded-full"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="-9"
                y="15.75"
                width="42.75"
                height="8.25"
                fill="#E53B35" />
              <rect
                x="-9"
                width="42.75"
                height="8.25"
                fill="white" />
              <rect
                x="-9"
                y="8.25"
                width="42.75"
                height="7.5"
                fill="#0C47B7" />
            </svg>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'О нас',
        link: '/about'
      },
      {
        title: 'Проекты',
        link: '/projects'
      },
      {
        title: 'Секторы бизнеса',
        link: '/business-sectors'
      },
      {
        title: 'Контакты',
        link: '/contacts',
        child: [
          {
            title: 'в Китае'
          },
          {
            title: 'в Кыргызстане'
          },
          {
            title: 'Мессенджеры'
          }
        ]
      }
    ],
    socials: [
      { icon: 'fab fa-instagram', link: '#' },
      { icon: 'fab fa-facebook', link: '#' },
      { icon: 'fab fa-twitter', link: '#' }
    ]
  })
}
</script>
