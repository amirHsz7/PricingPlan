<template>
        
    <div class="grid grid-rows-[auto-auto-1fr-auto-auto] rounded-xl p-4 gap-4" :class="bestChoice ? 'text-white bg-black' : 'text-black bg-gray-100' ">
        <!-- title -->
        <h4 class="heading-6">Start</h4>

        <!-- subtitle -->
        <p class="text-lg-b text-primary-text  break-all">iasdasifiaggisidgidsigiidsidsiaaaaaaaaaaaaaaaaaaadasdiasdaisdai</p>

        <!-- checklists -->
        <div class="grid gap-2">
            <div class="flex items-center text-lg-s gap-2" v-for="i in 4" :key="i">
                <FontAwesomeIcon class="text-dark-blue" icon="fa-solid fa-check" />
                asdasfgdsd
            </div>
        </div>

        <!-- price -->
        <div class="grid grid-cols-[1fr_auto]">
            <div class="text-primary-text text-md-r flex items-start gap-2"><span class="heading-6 text-black">$15</span>    /per month</div>
            <div class="text-md-r">billed early</div>
        </div>

        <!-- btn -->
        <div class="grid gap-1 items-center">
            <Button :wide="true" size="lg" color="dark">upgrade</Button>
            <!-- tip -->
            <div class="text-sm-r text-center text-primary-text">7 days free</div>
        </div>


    </div>

</template>


<script setup>
const props = defineProps({
  bestChoice: {
    type: Boolean,
    default : false
  },
})
</script>