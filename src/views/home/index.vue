<template>
    <div class="wrapper">
        <!-- <van-nav-bar title="标题" left-text="返回" left-arrow /> -->
        <div class="bg-[#F4F4F4] pb-[24vw]">
            <div class="h-[100vh] overflow-auto">
                <div
                    class="dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2">
                    <div class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center"><svg
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="10vw" height="10vw" viewBox="0 0 24 24"
                            class="dark:text-[#e8eaf2] text-[#3A455B] iconify iconify--majesticons">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M6 8h12M6 12h12M6 16h12"></path>
                        </svg>
                        <div class="relative"><label for=""><input type="text" placeholder="Love Is Gone (Acoustic)"
                                    class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"></label>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                class="absolute left-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></path>
                            </svg> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                class="absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 7V6a2 2 0 0 1 2-2h2M4 17v1a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v1m-4 13h2a2 2 0 0 0 2-2v-1M5 12h14">
                                </path>
                            </svg>
                        </div> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="8vw" height="8vw" viewBox="0 0 24 24"
                            class="dark:text-[#e8eaf2] text-[#3A455B] iconify iconify--material-symbols">
                            <path fill="currentColor"
                                d="m5 10l-.95-2.05L2 7l2.05-.95L5 4l.95 2.05L8 7l-2.05.95L5 10Zm13-3l-.625-1.375L16 5l1.375-.625L18 3l.625 1.375L20 5l-1.375.625L18 7Zm2 4l-.625-1.375L18 9l1.375-.625L20 7l.625 1.375L22 9l-1.375.625L20 11Zm-8 4q-1.25 0-2.125-.875T9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q0 1.25-.875 2.125T12 15Zm0-6Zm-1 13v-3.075q-2.6-.35-4.3-2.325T5 12h2q0 2.075 1.463 3.538T12 17q2.075 0 3.538-1.463T17 12h2q0 2.625-1.7 4.6T13 18.925V22h-2Zm1-9q.425 0 .713-.288T13 12V6q0-.425-.288-.713T12 5q-.425 0-.713.288T11 6v6q0 .425.288.713T12 13Z">
                            </path>
                        </svg>
                    </div>
                    <!-- 首页轮播图 -->
                    <div class="w-[90vw] h-[36vw] rounded-2xl overflow-hidden mx-auto">
                        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"
                            lazy-render>
                            <van-swipe-item v-for="image in HOMEPAGE_BANNER" :key="image">
                                <img :src="image.imageUrl" />
                            </van-swipe-item>
                        </van-swipe>
                    </div>

                </div>

                <div class="dark:bg-[#1a1c23] bg-[#f1f1f1]">
                    <!-- 菜单 -->
                    <div class="w-[92vw] mx-auto overflow-hidden scroll-wrapper h-[20vw]">
                        <div class="flex w-[190vw] mx-auto overflow-hidden h-[20vw] scroll-content relative">
                            <div class="scroll-item" v-for="(item, index) in HOMEPAGE_BLOCK_OLD_DRAGON_BALL"
                                :key="index">
                                <div class=" w-[15vw] h-[19vw] ml-[4vw] mr-[4vw] flex flex-col items-center">
                                    <img :src="item.uiElement.image.imageUrl2" alt="">
                                    <p class="text-[3.5vw]">{{ item.uiElement.mainTitle.title }}</p>
                                    <span v-if="index === 0"
                                        class="dark:text-[#1a1c23] absolute text-center top-[-1vw] w-[15vw] h-[19vw] leading-[19vw] items-center text-[3.5vw] text-[#fff] font-[800]">15</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 推荐歌单 -->
                    <Block v-model:PLAYLIST_RCMD="HOMEPAGE_BLOCK_PLAYLIST_RCMD"
                        v-model:scroll_playlist="scroll_playlist"></Block>
                    <!-- 雷达歌单  -->
                    <Block v-model:PLAYLIST_RCMD="HOMEPAGE_BLOCK_MGC_PLAYLIST"></Block>
                </div>

            </div>

        </div>

    </div>
</template>
<script setup>

import { getHomeData } from "../../api/home";
import { onMounted, reactive, ref, watchEffect } from "vue";
import { useRequest } from "vue-request";
const { data: homeData, loading: homeDataLoading } = useRequest(getHomeData);
import BScroll from '@better-scroll/core';
import Block from "./children/Block.vue";

//加载轮播图数据
const HOMEPAGE_BANNER = ref(null);
// const isLoading = ref(false);
//加载选项数据
const HOMEPAGE_BLOCK_OLD_DRAGON_BALL = ref(null);

const HOMEPAGE_BLOCK_PLAYLIST_RCMD = ref(null);
const scroll_playlist = ref(null);
const HOMEPAGE_BLOCK_MGC_PLAYLIST = ref(null);


watchEffect(() => {
    if (homeDataLoading.value === false) {
        // const homepageData = homeData.value?.data.blocks
        console.log(homeData.value?.data.blocks);

        HOMEPAGE_BANNER.value = getHomepageData("HOMEPAGE_BANNER").extInfo.banners;
        HOMEPAGE_BLOCK_OLD_DRAGON_BALL.value = getHomepageData("HOMEPAGE_BLOCK_OLD_DRAGON_BALL").creatives[0].resources;

        HOMEPAGE_BLOCK_PLAYLIST_RCMD.value = getHomepageData("HOMEPAGE_BLOCK_PLAYLIST_RCMD");
        scroll_playlist.value = getHomepageData("HOMEPAGE_BLOCK_PLAYLIST_RCMD").creatives[0].resources;

        HOMEPAGE_BLOCK_MGC_PLAYLIST.value = getHomepageData("HOMEPAGE_BLOCK_MGC_PLAYLIST");

    }
})
onMounted(() => {
    new BScroll(".scroll-wrapper", {
        scrollX: true,
        probeType: 3 // listening scroll event
    })
})

const getHomepageData = (code) => {
    const homepageData = homeData.value?.data.blocks;
    return homepageData.filter(item => item.blockCode === code)[0];
}

</script>
<style scoped lang="scss">
/* 样式隔离 */
// 父级选择器:deep(选择器){
//     自定义样式
// }
// .wrapper {
//     @at-root :deep(.van-nav-bar__title) {
//         color: red;
//     }

//     ;

//     @at-root :deep(.van-nav-bar__text) {
//         color: red;
//     }
// }
.my-swipe .van-swipe-item {

    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
}
</style>