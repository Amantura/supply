<template>
  <div>
    <div class="border-t app-bg">
      <div class="app-container">
        <HeroAbout />
      </div>
    </div>

    <div class="app-container">
      <AboutBlock />

      <YearsAbout />

      <BusinessAbout class="hidden lg:block" />
    </div>

    <div class="about-bg">
      <div class="w-full h-64 mb-10 md:mb-0 app-bg">
        <div class="app-container">
          <h2 class="py-10 text-4xl font-bold text-white">
            Плюсы и Преимущества
          </h2>
        </div>
      </div>

      <div class="-mt-10 app-container">
        <PluseAbout />
      </div>

    </div>


    <div class="bg-no-repeat bg-cover" style="background-image: url('/content/bg-about.png')">

      <div class="py-10 app-container">
        <OtherAbout />
      </div>

    </div>

    <div class="py-20 mt-32 bg-gray-100">
      <div class="app-container">
        <CardAbout />
      </div>
    </div>


    <div class="app-container">
      <SchemaAbout />
    </div>

    <div>
      <div class="pt-10 h-96 app-bg">
        <h3 class="text-3xl font-bold text-center text-white">
          Отзывы наших партнеров
        </h3>
      </div>
      <CertificateAbout />
    </div>


    <div class="app-container">
      <PartnersAbout />
      <ClientsAbout />
    </div>

  </div>
</template>
