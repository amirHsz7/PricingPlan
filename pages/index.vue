<template>
  <div>
    <!-- section one -->
    <div class="relative   justify-center flex flex-col items-center pt-24 gap-8">
      <!-- background -->
      <img src="@/assets/images/background.png" class="absolute object-cover z-10" alt="">
      <!-- title -->
      <h1 class="heading-1 z-20">Pricing Plans</h1>
      <!-- subtitle -->
      <h2 class="heading-6 z-20 max-w-[551px] text-primary-text text-center break-before-auto">
        Manage , Tracks and optimize your digital assets with a plan built for your needs.
      </h2>
      <!-- toggle -->
      <div class="z-20">
        <Toggle v-model="selected" :buttons="options" />
      </div>
    </div>

    <!-- section two -->
    <div class="grid grid-cols-3 gap-4">
    <Card bestChoice/>
    <Card />
    <Card />

    </div>
  </div>
  
</template>
<script setup>
const selected = ref('vue')

const options = [
  { label: 'Yearly', value: 'yearly' },
  { label: 'Monthly', value: 'monthly' },
]
</script>