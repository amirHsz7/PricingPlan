<template>
    <!-- router link button -->
    <NuxtLink v-if="isRouterLink" :to="link" :class="classes" @keydown="keydown" @keyup="keyup"
        :disabled="loading || disabled" :tabindex="index">
        <template v-if="!loading">
            <slot name="before"></slot>
            <span class="text">
                <slot></slot>
            </span>
            <slot name="after" class="after"></slot>
        </template>
    </NuxtLink>

    <!-- link button -->
    <a v-else-if="isLink" :href="link" :target="target" :class="classes" @click="click" @keydown="keydown" @keyup="keyup"
        :disabled="loading || disabled" :tabindex="index">
        <template v-if="!loading">
            <slot name="before"></slot>
            <span class="text">
                <slot></slot>
            </span>
            <slot name="after" class="after"></slot>
        </template>
    </a>

    <!-- simple button -->
    <button v-else :class="classes" @click="click" @keydown="keydown" @keyup="keyup" :disabled="loading || disabled"
        :tabindex="index">
        <template v-if="!loading">
            <slot name="before"></slot>
            <span class="text">
                <slot></slot>
            </span>
            <slot name="after" class="after"></slot>
        </template>
    </button>
</template>

<script setup>

const props = defineProps({
    loadingText: {
        type: String,
        default: 'loading...'
    },
    color: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'md',
        validator: val => ['xs','sm', 'md', 'lg'].includes(val)
    },
    index: {
        type: String,
        default: '1'
    },
    wide: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    toRight: {
        type: Boolean,
        default: false
    },
    link: {
        type: [Object, String]
    },
    target: {
        type: String,
        default: '_self'
    },
    class: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['click', 'keydown', 'keyup'])

// computed
const classes = computed(() => {
    let classes = ['btn']
    classes.push(props.size)
    classes.push(props.color)
    if (props.loading)
        classes.push('loading')
    if (props.wide)
        classes.push('wide')
    if (props.toRight)
        classes.push('toRight')
    if (props.class != '')
        classes.push(props.class)
    return classes;
})

const spinnerSize = computed(() => {
    if (props.size == 'sm')
        return 'xxxs'
    else if (props.size == 'lg')
        return 'xs'
    else
        return 'xxs'
})

const isRouterLink = computed(() => {
    return props.link && typeof props.link === 'object'
})

const isLink = computed(() => {
    return props.link && typeof props.link === 'string'
})

// methods
function click(e) {
    if (!props.disabled && !props.loading)
        emit('click', e)
}

function keydown(e) {
    if (!props.disabled && !props.loading)
        emit('keydown', e)
}

function keyup(e) {
    if (!props.disabled && !props.loading)
        emit('keyup', e)
}

</script>

<style lang="scss" scoped>
.btn {
    @apply inline-flex text-md-r rounded-full content-center w-max cursor-pointer transition ease-linear outline-transparent align-middle select-none items-center;
    *{
            @apply truncate
        }

    &:focus {
        // @apply outline;
    }

    &.wide {
        @apply flex w-full justify-center;
    }

    &.toRight {
        @apply flex justify-start
    }

    &:not(:disabled) {
        &.gray {
            @apply bg-gray-500  text-dark fill-dark;
    
            &:hover {
                @apply bg-gray-300;
            }
    
            &:active {
                @apply bg-gray-500;
            }
        }
        &.white {
            @apply  text-dark fill-dark;
    
            &:hover {
                // @apply bg-secondary-600;
            }
    
            &:active {
                // @apply bg-secondary-700;
            }
        }

        &.dark {
            @apply bg-dark text-white fill-white;
    
            &:hover {
                @apply bg-dark-800;
            }
    
            &:active {
                @apply bg-dark-700;
            }
        }

    }

    &:disabled {
        @apply bg-dark-700 text-dark fill-dark cursor-not-allowed;
    }

    &.xs {
        @apply h-7 text-xs-m  px-4 gap-2;
    }

    &.sm {
        @apply h-8 text-sm-m px-4 gap-2;
    }
    &.md {
        @apply h-8 p-1 px-2  gap-2;
    }

    &.lg {
        @apply h-12 px-8 gap-2;
    }
    &.hide{
        @apply hidden
    }
}
</style>