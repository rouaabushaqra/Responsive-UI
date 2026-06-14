<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  image?: string
  iconSize?: string
  cardClass?: string
  iconClass?: string
}

withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  image: '',
  iconSize: '60px',
  cardClass: '',
  iconClass: '',
})
</script>

<template>
  <div
    :class="[
      'bg-white border border-slate-200 rounded-3xl p-6 shadow-sm transition-all duration-300',
      cardClass,
    ]"
  >
    <slot>
      <h3
        v-if="title"
        class="text-xl font-bold"
      >
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="text-slate-500 mt-2"
      >
        {{ description }}
      </p>
    </slot>
  </div>
</template>