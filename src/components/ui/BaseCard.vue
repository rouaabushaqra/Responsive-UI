<script setup lang="ts">
interface Props {
  title: string
  description: string
  image?: string
  iconSize?: string
  cardClass?: string
  iconClass?: string
}

withDefaults(defineProps<Props>(), {
  iconSize: '60px',
  cardClass: '',
  iconClass: ''
})
</script>

<template>
  <div
    :class="[
      'bg-white border border-slate-200 rounded-3xl p-6 flex flex-col gap-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
      cardClass
    ]"
  >
   
    <img
      v-if="image"
      :src="image"
      :alt="title"
      class="rounded-xl object-cover"
    />

  
    <div
      v-else
      :class="[
        'rounded-[18px] flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-cyan-500',
        iconClass
      ]"
      :style="{
        width: iconSize,
        height: iconSize
      }"
    >
      <slot name="icon" />
    </div>

    <h3 class="text-xl font-bold text-slate-900">
      {{ title }}
    </h3>

    <p class="text-sm leading-7 text-slate-500">
      {{ description }}
    </p>

    <slot />
  </div>
</template>