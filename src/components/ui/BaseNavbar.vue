<script setup lang="ts">
interface Props {
  sticky?: boolean
  bordered?: boolean
}

withDefaults(defineProps<Props>(), {
  sticky: true,
  bordered: true,
})
</script>

<template>
  <header
    :class="[
      'w-full bg-white',
      sticky && 'sticky top-0 z-50',
      bordered && 'border-b border-slate-200',
    ]"
  >
    <nav
      class="mx-auto flex h-16 items-center justify-between px-4 lg:px-6"
      aria-label="Main Navigation"
    >
      <div class="flex items-center gap-4">
        <slot name="logo" />
      </div>

      <div class="hidden md:flex items-center gap-6">
        <slot name="menu" />
      </div>

      <div class="flex items-center gap-3">
        <slot name="actions" />
      </div>
    </nav>
  </header>
</template>
