<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  description?: string
  cardClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  cardClass: '',
})

const cardClasses = computed(() => [
  'rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300',
  props.cardClass,
])
</script>

<template>
  <article :class="cardClasses" aria-label="Card">
    <header v-if="$slots.header || title">
      <slot name="header">
        <h3 class="text-xl font-bold text-slate-900">
          {{ title }}
        </h3>
      </slot>
    </header>

    <div class="mt-2">
      <slot>
        <p v-if="description" class="text-slate-500">
          {{ description }}
        </p>
      </slot>
    </div>

    <footer v-if="$slots.footer" class="mt-4">
      <slot name="footer" />
    </footer>
  </article>
</template>
