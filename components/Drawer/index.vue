<template>
    <transition name="drawer-slide-right" >
        <div v-show="show" class="drawer-component">
            <div class="drawer-bg" @click="close"></div>
            <div class="drawer-frame" :style="{maxWidth}">
                <slot />
            </div>
        </div>
    </transition>
</template>

<script setup>

const emit = defineEmits(['close'])
const props = defineProps({
    show:{
        type:Boolean
    },
    maxWidth :{
        type : String,
        default : '360px',
    },
    closable:{
        type:Boolean,
        default:true
    }
})

watch(()=>props.show , to=>{
    if(to) {
        PageScroll(!to)
    }
})

const close = () => {
    PageScroll(false)
    props.closable && emit('close')
}
</script>

<style lang="scss">
.drawer-component {
    @apply fixed top-0 left-0 h-[calc(100vh-48px)] w-screen z-[10000];

    .drawer-bg {
        @apply bg-dark bg-opacity-[24%] absolute top-0 left-0 h-screen w-screen;
    }

    .drawer-frame {
        @apply bg-white overflow-hidden w-screen max-w-[v-bind(maxWidth)] top-0 left-0 z-10 absolute h-screen transition shadow-md;
    }
}

// transitions
.drawer-slide-right-enter-active,
.drawer-slide-right-leave-active {
    transition: 0.4s ease;
    
    .drawer-bg {
        transition: 0.4s ease;
    }

    .drawer-frame {
        transition: 0.4s ease;
    }
}

// slide-down
.drawer-slide-right-enter-from,
.drawer-slide-right-leave-to {
    .drawer-bg {
        @apply bg-opacity-0;
    }

    .drawer-frame {
        @apply translate-x-[-100%]
    }
}
</style>