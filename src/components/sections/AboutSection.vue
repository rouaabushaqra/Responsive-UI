<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
</script>

<template>
  <section id="about" class="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 max-w-6xl mx-auto">
    <div>
      <span class="font-bold text-gradient"> About Nexora </span>

      <h2 class="text-4xl font-semibold max-w-xl mt-3">Full-stack capabilities, one partner.</h2>

      <p class="text-slate-500 max-w-md mt-4">
        From product strategy to deployment — our cross-functional teams ship the work that moves
        your roadmap forward.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <BaseCard>
        <p class="text-4xl font-bold">2018</p>
        <p class="text-slate-500 mt-2">Founded</p>
      </BaseCard>

      <BaseCard>
        <p class="text-4xl font-bold">120+</p>
        <p class="text-slate-500 mt-2">Clients</p>
      </BaseCard>

      <BaseCard>
        <p class="text-4xl font-bold">300+</p>
        <p class="text-slate-500 mt-2">Projects</p>
      </BaseCard>

      <BaseCard>
        <p class="text-4xl font-bold">40+</p>
        <p class="text-slate-500 mt-2">Team</p>
      </BaseCard>
    </div>
  </section>
</template>
