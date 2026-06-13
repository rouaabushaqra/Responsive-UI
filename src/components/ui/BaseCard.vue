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
      'bg-white border border-slate-200 rounded-3xl p-6 shadow-sm',
      cardClass
    ]"
  >
    <slot>
      <h3 class="text-xl font-bold">
        {{ title }}
      </h3>

      <p class="text-slate-500">
        {{ description }}
      </p>
    </slot>
  </div>
</template>