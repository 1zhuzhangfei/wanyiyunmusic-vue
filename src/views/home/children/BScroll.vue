<template>
    <div class="w-[98vw] h-[46vw] pt-[1vw] overflow-hidden border-[#EBEDF2] playlist-wrapper" ref="bsCroll">
        <div class="w-[210vw] flex pl-[2vw]">
            <slot></slot>
        </div>
    </div>

</template>
<script setup>
import BScroll from '@better-scroll/core';
import { onMounted, ref, shallowRef, onUpdated, onBeforeUnmount } from "vue";
let bs = ref(null);
let bsCroll = shallowRef(null);


onMounted(() => {

    bs = new BScroll(bsCroll.value, {
        scrollX: true,
        probeType: 3 // listening scroll event
    })
})

onUpdated(bs?.refresh);
onBeforeUnmount(bs?.dispose);
</script>