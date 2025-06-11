<template>
        
    <div v-show="data" class="grid grid-rows-[auto-auto-1fr-auto] items-end rounded-xl p-4 gap-4 min-h-[456px]" :class="data?.best_choice == 'true' ? 'text-white bg-black scale-110' : 'text-black bg-gray-100' ">
        <!-- title -->
        <h4 class="heading-6">{{ data?.title }}</h4>

        <!-- subtitle -->
        <p class="text-lg-b text-primary-text  break-all">{{ data?.subtitle }}</p>

        <!-- checklists -->
        <div class="flex flex-col gap-2 min-h-[176px]">
            <div class="flex items-center text-lg-s gap-2" v-for="(item , index) in data?.checklists" :key="index">
                <FontAwesomeIcon class="text-dark-blue text-sm" icon="fa-solid fa-check" />
                {{ item }}
            </div>
        </div>

        <!-- action bar -->
        <div class="flex flex-col gap-6">
            <!-- price -->
            <div v-if="data?.price*1" class="grid grid-cols-[1fr_auto]">
                <div class=" text-md-r flex items-start gap-2"><span class="heading-6 ">${{ data?.price }}</span>    /per month</div>
                <div class="text-md-r">billed early</div>
            </div>
            <div  class="heading-6 text-black" v-else>
                {{ data?.price }}
            </div>

            <!-- btn -->
            <div class="flex flex-col gap-1 justify-end">
                <Button :wide="true" size="lg" :color="data?.best_choice == 'true'? 'white' : 'dark'">{{ data?.btn_value }}</Button>
                <!-- tip -->
                <div class="text-sm-r text-center text-primary-text">{{ data?.tip }}</div>
            </div>
        </div>


    </div>

    <div v-show="!data" class="min-h-[520px] animate-pulse">

    </div>

</template>


<script setup>
const props = defineProps({
  data : {
    type : Object,
    required : true
  }
})

console.log('props',props.data)
</script>