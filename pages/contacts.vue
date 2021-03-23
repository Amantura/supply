<template>
  <div class="app-container">

    <div class="flex flex-wrap-reverse justify-center py-20 lg:py-44">

      <div class="flex flex-col justify-between w-full mt-5 space-y-5 lg:w-1/2 ">
        <div class="border-b-2 pb-7">
          <h3 class="text-2xl font-bold uppercase app-text">контакты в Кыргызстане</h3>
          <img class="w-full my-4" src="/content/border-m.svg" />

          <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div class="flex flex-col w-1/2 space-y-4">
              <a href="tel:+996555155677" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-mobile-android"></i></span><span>+996 555 15 56 77</span></a>
              <a href="tel:+996502908880" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="fab fa-whatsapp"></i></span><span>+996 502 90 88 80</span></a>
              <a href="tel:+996550908880" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="fab fa-weixin"></i></span><span>+996 550 90 88 80</span></a>
            </div>

            <div class="flex flex-col w-full space-y-4 lg:w-1/2">
              <a href="mailto:supplypls@gmail.com" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-envelope"></i></span><span>supplypls@gmail.com</span></a>
              <a href="#" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-map-marker"></i></span><span>Усенбаева 138А</span></a>
            </div>
          </div>
        </div>

        <div class="border-b-2 py-7">

          <h3 class="text-2xl font-bold uppercase app-text">
            контакты в Китае
          </h3>

          <img class="w-full my-4" src="/content/border-m.svg" />

          <div class="flex flex-col space-y-4">
            <a href="tel:+8618681206977" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-envelope"></i></span><span>+8618681206977</span></a>
            <a href="#" class="flex items-center"><span class="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded-full"><i class="far fa-map-marker"></i></span><span>Longting, Yangcheng, <br /> No. 9 Xinhong Road, Panzhihua City, Sichuan Province</span></a>
          </div>

        </div>
      </div>

      <div class="flex items-center justify-end w-1/2">
        <img v-lazy-load data-src="/content/bg-contact.svg" />
      </div>

    </div>


  </div>
</template>
