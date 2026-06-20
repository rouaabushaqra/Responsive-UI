<template>
  <div
    id="contact"
    class="py-24 mx-auto max-w-6xl mb-4 relative rounded-3xl overflow-hidden bg-secondary text-secondary-foreground p-12 md:p-20 text-center"
  >
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
      Let's build something <span className="text-gradient">remarkable</span> together.
    </h1>
    <p class="text-center text-white my-6">
      Tell us about your project. We'll respond within 24 hours with next steps.
    </p>
    <div class="flex flex-col lg:flex-row flex-wrap gap-5 justify-center m-auto my-6">
      <button
        class="bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-6 shadow-elegant"
      >
        {{ $t('home.contact') }}
      </button>

      <button
        class="h-12 px-6 bg-transparent border-white/20 text-secondary-foreground hover:bg-white/10 hover:text-secondary-foreground"
      >
        {{ $t('home.portfolio') }}
      </button>
    </div>
  </div>
</template>
