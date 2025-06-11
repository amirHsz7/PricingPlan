<template>
    <NuxtLink :to="link" class="text-primary-text no-style-link">
        {{ text }}
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        text:{
            type: String
        },
        link:{
            type: String,
            default: '/'
        },
    })
</script>

<style scoped>
.no-style-link {
  all: unset;
  cursor: pointer;
}  
</style>