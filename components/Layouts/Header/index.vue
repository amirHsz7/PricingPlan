<template>
    <header class="sticky top-0 z-40 bg-white">
        <div class="relative py-4 border-b border-stroke w-full grid md:grid-cols-[auto_1fr_auto] gap-16 items-center">
           <!-- logo -->
            <div class="text-lg-b font-bold text-center">
                chainpay
            </div>
            <!-- links -->
            <div class="hidden md:flex items-center gap-4">
                <LayoutsLink text="Features"/>
                <LayoutsLink text="Pricing"/>
                <LayoutsLink text="Dashboard"/>
                <LayoutsLink text="Resources"/>
                <LayoutsLink text="Comunity"/>
            </div>
            <!-- buttons -->
            <div class="hidden md:flex items-center gap-2">
                <Button :wide="false" color="gray">Sign In</Button>
                <Button :wide="false" color="dark">Free Trial</Button>
            </div>
            <!-- menu button in mobile -->
            <div class="md:hidden absolute left-0 transition duration-300 hover:bg-stroke  rounded-full">
                <Button @click="toggleDrawer" color="white">
                    <FontAwesomeIcon icon="fa-solid fa-bars fa-5x" />
                </Button>
            </div>
        </div>
    </header>
    <!-- drawer in mobile mode -->
    <Drawer :show="show" @close="close">
        <div class="h-full grid grid-rows-[auto_1fr_auto]" >
            <div class="relative mb-4 py-4 grid items-center font-bold text-center text-lg-b border-b-2 border-stroke">
                chainpay
                <!-- close btn -->
                <div class="absolute right-4 flex items-center justify-center">
                    <Button @click="toggleDrawer" color="white">
                        <FontAwesomeIcon icon="fa-solid fa-xmark fa-5x" />
                    </Button>
                </div>
            </div>
            <!-- static links -->
            <div class="flex flex-col px-2 gap-2">
                <div v-for="(item ,index ) in ['Features' , 'Pricing' , 'Dashboard' , 'Resources' , 'Comunity']" :key="index" class="py-2 border-b border-stroke">
                    <LayoutsLink :text="item"/>
                </div>
            </div>
            <!-- btns -->
            <div class="mt-4 pb-2 px-2 flex flex-col justify-center items-center gap-2">
                <Button :wide="true" size="lg" color="gray" >Sign In</Button>
                <Button :wide="true" size="lg" color="dark" >Free Trial</Button>
            </div>
        </div>
    </Drawer>
</template>

<script setup>

    const show = ref(false)
    const emit = defineEmits(['close'])

    const toggleDrawer = () => {
        show.value = !show.value
    }
    function close() {
        PageScroll(true)
        show.value = false
    }

    const handleResize = () => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    if (isDesktop) {
        close()
    }
    }

    onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    })

    onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    })
</script>
