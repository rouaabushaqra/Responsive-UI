<script setup lang="ts">
import { computed } from 'vue'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

interface Props {
  modelValue?: string | number | null
  label?: string
  placeholder?: string
  options: SelectOption[]
  disabled?: boolean
  required?: boolean
  error?: string
  name?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  label: '',
  placeholder: 'Select an option',
  disabled: false,
  required: false,
  error: '',
  name: '',
  id: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null]
}>()

const selectId = computed(() => {
  return props.id || `select-${crypto.randomUUID()}`
})

const hasError = computed(() => !!props.error)

const selectClasses = computed(() => [
  'w-full rounded-lg border bg-white px-4 py-2 text-sm transition-colors duration-200',
  'focus:outline-none focus:ring-2',
  {
    'border-slate-300 focus:border-blue-500 focus:ring-blue-200': !hasError.value,

    'border-red-500 focus:border-red-500 focus:ring-red-200': hasError.value,

    'cursor-not-allowed bg-slate-100 opacity-60': props.disabled,
  },
])

const updateValue = (event: Event) => {
  const target = event.target as HTMLSelectElement

  emit('update:modelValue', target.value === '' ? null : target.value)
}
</script>

<template>
  <div class="w-full">
    <label v-if="label" :for="selectId" class="mb-1 block text-sm font-medium text-slate-700">
      {{ label }}

      <span v-if="required" class="text-red-500"> * </span>
    </label>

    <select
      :id="selectId"
      :name="name"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      :aria-invalid="hasError"
      :aria-describedby="error ? `${selectId}-error` : undefined"
      :class="selectClasses"
      @change="updateValue"
    >
      <option value="">
        {{ placeholder }}
      </option>

      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>

    <p v-if="error" :id="`${selectId}-error`" class="mt-1 text-sm text-red-600" role="alert">
      {{ error }}
    </p>
  </div>
</template>
