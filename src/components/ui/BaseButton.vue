<script  setup lang="ts">

interface Props{
    type: 'primary' | 'secondary' | 'danger';
    disabled?: boolean; 
}
withDefaults(defineProps<Props>(), {
    disabled: false
})
</script>

<template>
    <button :class="['base-button', type, disabled ? 'disabled' : '']" :disabled="disabled">
        <slot />
    </button>
    </template>