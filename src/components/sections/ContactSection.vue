<template>
  <div id="contact" class="contact-section">
    <h1
      class="w-[78%] mx-auto text-4xl font-semibold leading-tight text-3xl md:text-5xl lg:text-7xl text-center text-white my-6 px-6"
    >
      Let's build something remarkable together.
    </h1>
    <p class="text-center text-white my-6">
      Tell us about your project. We'll respond within 24 hours with next steps.
    </p>
    <div class="flex flex-col lg:flex-row flex-wrap gap-5 justify-center m-auto my-6">
      <button
        class="w-full md:w-[258px] bg-primary-gradient hover:bg-primary-gradient-hover text-white px-6 py-3 rounded-lg transition-all duration-300"
      >
        {{ $t('home.contact') }}
      </button>

      <button
        class="w-full md:w-[258px] bg-primary-gradient hover:bg-primary-gradient-hover text-white px-6 py-3 rounded-lg transition-all duration-300"
      >
        {{ $t('home.portfolio') }}
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.contact-section {
  background-color: #101c35;
  margin: 50px;
  padding: 30px;
  border-radius: 20px;
}
</style>
