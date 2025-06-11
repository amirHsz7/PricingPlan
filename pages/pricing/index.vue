<template>
  <div>
    <!-- section one -->
    <div class="relative justify-center flex flex-col items-center pt-24 gap-8">
      <!-- background -->
      <img src="@/assets/images/background.png" class="absolute object-cover" alt="">
      <!-- title -->
      <h1 class="heading-3 md:heading-1 z-20 text-center">Pricing Plans</h1>
      <!-- subtitle -->
      <h2 class="heading-6 z-20 max-w-[551px] text-primary-text text-center break-before-auto">
        Manage , Tracks and optimize your digital assets with a plan built for your needs.
      </h2>
      <!-- toggle -->
      <div class="z-20">
        <Toggle v-model="selected" :buttons="options" />
      </div>
    </div>
    <!-- section two : cards-->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      <template v-for="(item , index) in items[selected]" :key="index">
          <Card :data="item"/>  
      </template>
    </div>
  </div>
  
</template>
<script setup>

const selected = ref('yearly')

const options = [
  { label: 'Yearly', value: 'yearly' },
  { label: 'Monthly', value: 'monthly' },
]
const items = ref(null)
const filteredItems = ref(null)
  
await getRequest('/api/app/app')
.then((response) => {
    const {data} = parseApiResponse(response)
    
    items.value = data
    
})
.catch((error)=>{
  console.log(error);
})

</script>