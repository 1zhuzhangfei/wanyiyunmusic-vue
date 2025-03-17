<template>
    <div v-if="PLAYLIST_RCMD">
        <div class="w-[100vw] px-[4vw] dark:text-[#e9ebf2]">
            <div class="flex justify-between items-center h-[12vw]">
                <div class="flex items-center"><span
                        class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]">{{ PLAYLIST_RCMD.uiElement.subTitle.title }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                        class="dark:text-[#e9ebf2] text-[#3d475b] font-[800] w-[4vw] h-[4vw] iconify iconify--mingcute">
                        <g fill="none" fill-rule="evenodd">
                            <path
                                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z">
                            </path>
                            <path fill="currentColor"
                                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z">
                            </path>
                        </g>
                    </svg></div> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true" role="img" width="8" height="8" viewBox="0 0 24 24"
                    class="dark:text-[#e9ebf2] text-[#3d475b] w-[4vw] h-[6vw] iconify iconify--ri">
                    <path fill="currentColor"
                        d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5">
                    </path>
                </svg>
            </div>
        </div>
        <BScroll>
            <div v-for="playlist in PLAYLIST_RCMD.creatives" :key="playlist" class="pt-[1vw] relative">
                <van-swipe v-if='playlist.creativeType === "scroll_playlist"'
                    class="w-[31vw] ml-[2vw] h-[46vw] relative z-[1]" :autoplay="3000" :show-indicators="false"
                    vertical>
                    <van-swipe-item v-for="item in scroll_playlist" :key="item">
                        <div
                            class="dark:bg-[#1A1C23] w-[31vw] h-[31vw] bg-[#f3f3f3] overflow-hidden relative rounded-[8px]">
                            <div class="absolute top-0 left-0">
                                <img :src="item.uiElement.image.imageUrl" alt=""
                                    class="w-[31vw] h-[31vw] rounded-[8px]">
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                class="absolute text-[#fff] w-[10vw] h-[6vw] right-0 iconify iconify--iconoir">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="m14 9l-.25.375M10 9a5 5 0 1 0 0 6l.334-.5M10 9l4 6a5 5 0 1 0 0-6">
                                </path>
                            </svg>
                        </div>
                        <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">
                            {{ item.uiElement.mainTitle.title }}</p>
                    </van-swipe-item>
                </van-swipe>
                <div v-else class="w-[31vw] h-[46vw] ml-[2vw] relative z-[1]">
                    <div
                        class="dark:bg-[#1A1C23] w-[31vw] h-[31vw] bg-[#f3f3f3] overflow-hidden relative rounded-[8px]">
                        <div class="absolute top-0 left-0">
                            <img :src="playlist.uiElement.image.imageUrl" alt=""
                                class="w-[31vw] h-[31vw] rounded-[8px]">
                        </div>
                    </div>
                    <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">
                        {{ playlist.uiElement.mainTitle.title }}
                    </p>
                </div>
                <div
                    class="dark:bg-[#272727] w-[26vw] h-[31vw] bg-[#ddd] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]">
                </div>
            </div>
        </BScroll>
    </div>
</template>
<script setup>
import { defineModel } from "vue";
import BScroll from "./BScroll.vue";
const scroll_playlist = defineModel("scroll_playlist")
const PLAYLIST_RCMD = defineModel("PLAYLIST_RCMD")
// console.log(PLAYLIST_RCMD);


</script>