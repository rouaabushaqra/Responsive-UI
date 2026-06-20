<script setup lang="ts">
interface Props {
  bordered?: boolean
  fixed?: boolean
}

withDefaults(defineProps<Props>(), {
  bordered: true,
  fixed: false,
})
</script>

<template>
  <footer
    :class="[
      'w-full bg-white px-4 py-4 lg:px-6',
      bordered && 'border-t border-slate-200',
      fixed && 'fixed bottom-0 left-0 right-0 z-40',
    ]"
  >
    <div class="mx-auto flex flex-col items-center justify-between gap-3 md:flex-row">
      <div class="text-sm text-slate-500">
        <slot name="copyright"> © {{ new Date().getFullYear() }} </slot>
      </div>

      <div class="flex items-center gap-4">
        <slot name="links" />
      </div>

      <div class="flex items-center gap-3">
        <slot name="actions" />
      </div>
    </div>
  </footer>
</template>
