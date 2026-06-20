<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'danger'
  buttonType?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  buttonType: 'button',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const isDisabled = computed(() => props.disabled || props.loading)

const classes = computed(() => [
  'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500':
      props.variant === 'primary',

    'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400':
      props.variant === 'secondary',

    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500': props.variant === 'danger',

    'cursor-not-allowed opacity-50': isDisabled.value,
  },
])

const handleClick = (event: MouseEvent) => {
  if (isDisabled.value) return

  emit('click', event)
}
</script>

<template>
  <button
    :type="buttonType"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :aria-busy="loading"
    :class="classes"
    @click="handleClick"
  >
    <slot v-if="!loading" />

    <span v-else class="inline-flex items-center gap-2">
      <svg
        class="h-4 w-4 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>

      <span>Loading...</span>
    </span>
  </button>
</template>
