<template>
  <header class="bg-home p-5">
    <h1
      class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] leading-tight font-bold w-full md:w-4/5 lg:w-3/5 text-center mx-auto max-w-[800px]"
    >
      Engineering
      <span className="text-gradient">digital products</span>
      that move companies forward.
    </h1>

    <p
      class="mx-auto mt-4 w-full max-w-[600px] px-4 text-center text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:text-xl lg:leading-relaxed"
    >
      {{ $t('home.description') }}
    </p>

    <div class="flex flex-col lg:flex-row flex-wrap gap-5 justify-center mx-5">
      <button
        class="w-full md:w-[258px] px-6 py-3 bg-gradient-primary rounded-lg text-primary-foreground hover:opacity-90 shadow-elegant h-12 px-6 cursor-pointer"
      >
        {{ $t('home.contact') }}
      </button>

      <button
        class="w-full md:w-[258px] px-6 py-3 rounded-lg text-base border-2 border-slate-900 text-slate-900 hover:text-white hover:bg-primary-gradient hover:bg-primary-gradient transition-all duration-300 cursor-pointer"
      >
        {{ $t('home.portfolio') }}
      </button>
    </div>
  </header>
</template>
