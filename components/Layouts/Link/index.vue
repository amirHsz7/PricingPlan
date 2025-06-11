<template>
    <NuxtLink :to="link" class="text-primary-text transition hover:text-dark-600 cursor-pointer ">
        {{ text }}
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        text:{
            type: String
        },
        url:{
            type: String,
            default: '/'
        },
    })
</script>

<style scoped>
.no-style-link {
  text-decoration: none;
  color: inherit;
}  
</style>