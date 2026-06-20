<script setup lang="ts">
import { watch, onMounted, onBeforeUnmount, ref } from 'vue'

interface Props {
  modelValue: boolean
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  persistent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  closeOnBackdrop: true,
  closeOnEsc: true,
  persistent: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const modalRef = ref<HTMLElement | null>(null)

const close = () => {
  if (props.persistent) return

  emit('update:modelValue', false)
  emit('close')
}

const handleBackdropClick = () => {
  if (!props.closeOnBackdrop) return

  close()
}

const handleEsc = (event: KeyboardEvent) => {
  if (!props.closeOnEsc) return

  if (event.key === 'Escape') {
    close()
  }
}

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      requestAnimationFrame(() => {
        modalRef.value?.focus()
      })
    } else {
      document.body.style.overflow = ''
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleEsc)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200"
      leave-active-class="transition duration-150"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/50" @click="handleBackdropClick" />

        <div
          ref="modalRef"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          class="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-xl outline-none"
        >
          <header v-if="$slots.header" class="border-b border-slate-200 px-6 py-4">
            <slot name="header" />
          </header>

          <section class="px-6 py-5">
            <slot />
          </section>

          <footer v-if="$slots.footer" class="border-t border-slate-200 px-6 py-4">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
