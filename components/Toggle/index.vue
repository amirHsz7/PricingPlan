<template>
  <div class="inline-flex gap-1 rounded-full p-1 overflow-hidden bg-gray-300">
    <button
      v-for="(btn, index) in buttons"
      :key="index"
      :class="[
        'px-4 py-2 text-md-r rounded-full transition duration-300',
        modelValue === btn.value
          ? 'bg-white shadow-md rounded-full'
          : 'bg-transparent hover:bg-gray-200'
      ]"
      @click="$emit('update:modelValue', btn.value)"
    >
      {{ btn.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  buttons: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: null,
  }
})

defineEmits(['update:modelValue'])
</script>