<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="px-6 py-4">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <!-- Logo -->
      <h1 class="text-2xl font-bold">Nexora</h1>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-6">
        <RouterLink to="/#hero"> Home </RouterLink>
        <RouterLink to="/#about"> About </RouterLink>
        <RouterLink to="/#work"> Work </RouterLink>
        <RouterLink to="/#contact"> Contact </RouterLink>
      </div>

      <!-- Desktop Button -->
      <button
        class="hidden md:block bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Sign In
      </button>

      <!-- Burger Button -->
      <button class="md:hidden" @click="isOpen = !isOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden mt-4 flex flex-col gap-4">
      <RouterLink to="/#hero" @click="isOpen = false"> Home </RouterLink>

      <RouterLink to="/#about" @click="isOpen = false"> About </RouterLink>

      <RouterLink to="/#work" @click="isOpen = false"> Work </RouterLink>

      <RouterLink to="/#contact" @click="isOpen = false"> Contact </RouterLink>

      <button class="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-4 py-2 rounded-lg">
        Sign In
      </button>
    </div>
  </nav>
</template>
