<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: string | number
  label?: string
  placeholder?: string
  type?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  error?: string
  name?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  error: '',
  name: '',
  id: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = computed(() => props.id || `input-${Math.random().toString(36).slice(2, 11)}`)

const hasError = computed(() => !!props.error)

const inputClasses = computed(() => [
  'w-full rounded-lg border px-4 py-2 text-sm transition-colors duration-200',
  'focus:outline-none focus:ring-2',
  {
    'border-slate-300 focus:border-blue-500 focus:ring-blue-200': !hasError.value,

    'border-red-500 focus:border-red-500 focus:ring-red-200': hasError.value,

    'cursor-not-allowed bg-slate-100 opacity-60': props.disabled,
  },
])

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement

  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="w-full">
    <label v-if="label" :for="inputId" class="mb-1 block text-sm font-medium text-slate-700">
      {{ label }}

      <span v-if="required" class="text-red-500"> * </span>
    </label>

    <div class="relative">
      <slot name="prefix" />

      <input
        :id="inputId"
        :name="name"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :aria-invalid="hasError"
        :aria-describedby="error ? `${inputId}-error` : undefined"
        :class="inputClasses"
        @input="updateValue"
      />

      <slot name="suffix" />
    </div>

    <p v-if="error" :id="`${inputId}-error`" class="mt-1 text-sm text-red-600" role="alert">
      {{ error }}
    </p>
  </div>
</template>
