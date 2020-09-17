<template>
    <transition name="v">
        <div v-show="visible" class="loading" ref="loadingEle">
            <div>
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" />
                </svg>
                <p class="loading-text">{{ msg }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
import {ref, watch} from 'vue';

export default {
    name: 'Loading',
    props: {
        msg: {
            type: String
        }
    },
    setup() {
        const loadingEle = ref(null);

        let visible = ref(false);
        watch(visible, () => {
            if (loadingEle.value) {
                document.body.style.overflow = visible.value ? 'hidden' : 'auto';
            }
        });

        const show = () => (visible.value = true);

        const close = () => (visible.value = false);

        return {
            visible,
            show,
            close,
            loadingEle
        };
    }
};
</script>
<style lang="scss">
.loading {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    background-color: hsla(0, 0%, 100%, 0.9);
    margin: 0;
    transition: opacity 0.3s;
    pointer-events: none;

    .circular {
        height: 42px;
        width: 42px;
        animation: loading-rotate 2s linear infinite;

        .path {
            animation: loading-dash 1.5s ease-in-out infinite;
            stroke-dasharray: 90, 150;
            stroke-dashoffset: 0;
            stroke-width: 2;
            stroke: #409eff;
            stroke-linecap: round;
        }
    }

    .loading-text {
        color: #409eff;
        margin: 3px 0;
        font-size: 14px;
    }
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-leave-from,
.v-enter-to {
    opacity: 1;
}

@keyframes loading-rotate {
    100% {
        transform: rotate(1turn);
    }
}

@keyframes loading-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -40px;
    }

    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120px;
    }
}
</style>
