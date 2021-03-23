<template>
  <div class="flex flex-col py-10 lg:py-44">
    <h2 class="text-3xl font-bold uppercase app-text">
      Контакты
    </h2>

    <img src="/content/border.svg" class="hidden my-6 lg:block" />
    <img src="/content/border-m.svg" class="my-6 lg:hidden" />


    <div class="flex flex-wrap justify-between w-full pt-10 lg:flex-nowrap lg:space-x-6 ">
      <div class="w-full border-b-2 lg:w-1/2 pb-7">
        <h3 class="text-2xl font-bold uppercase app-text">в Кыргызстане</h3>
        <img class="w-full my-4" src="/content/border-m.svg" />

        <div class="flex flex-wrap ">
          <div class="flex flex-col w-full space-y-4 md:w-1/2">
            <a href="tel:+996555155677" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-mobile-android"></i></span><span>+996 555 15 56 77</span></a>
            <a href="tel:+996502908880" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="fab fa-whatsapp"></i></span><span>+996 502 90 88 80</span></a>
            <a href="tel:+996550908880" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="fab fa-weixin"></i></span><span>+996 550 90 88 80</span></a>
          </div>

          <div class="flex flex-col w-full mt-4 space-y-4 md:pl-4 md:mt-0 md:w-1/2">
            <a href="mailto:supplypls@gmail.com" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-envelope"></i></span><span>supplypls@gmail.com</span></a>
            <a href="#" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-map-marker"></i></span><span>Усенбаева 138А</span></a>
          </div>
        </div>
      </div>

      <div class="w-full mt-5 border-b-2 lg:mt-0 lg:w-1/2 pb-7">

        <h3 class="text-2xl font-bold uppercase app-text">
          в Китае
        </h3>

        <img class="w-full my-4" src="/content/border-m.svg" />

        <div class="flex flex-col space-y-4">
          <a href="tel:+8618681206977" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-envelope"></i></span><span>+8618681206977</span></a>
          <a href="#" class="flex items-center"><div><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-map-marker"></i></span></div><span>Longting, Yangcheng, <br /> No. 9 Xinhong Road, Panzhihua City, Sichuan Province</span></a>
        </div>

      </div>
    </div>
  </div>
</template>
