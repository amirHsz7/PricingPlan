<template>
    <div class="min-h-screen">
        
        <!-- header
        <div class="container py-2">
            <PanelHeader />
        </div> -->
        <!-- body -->
        <div class="container ">
            <LayoutsHeader />
            <slot />
        </div>
    </div>
</template>

<script setup>
console.log('default');
</script>

<style>

</style>