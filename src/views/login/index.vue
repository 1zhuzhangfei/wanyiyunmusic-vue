<template>
    <div class="login-main">
        <div class="login-head">
                <svg  class="login-head-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="0.44em" height="1em" viewBox="0 0 7 16"><path fill="currentColor" d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0s.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"></path></svg> 
                <div  class="login-head-right">游客登录</div>
        </div>
        <img class="wangyi-img" src="../../assets/static/logo.fill.svg" alt="">
        <div v-if="messageCode===802" class="succuess-body">
            <img src="../../assets/static/queding.png" alt="" class="succuess-body-img">
             <h1 class="succuess-body-h1">扫描成功</h1> 
             <p class="succuess-body-p">请在手机上确认登录</p>
        </div>
        <div v-else class="login-body">
           <img class="login-body-img" :src="qrimg" alt="">  
           <div v-if="timeFail" class="login-body-shadow">
                    <div class="login-body-shadow-back"></div> 
                    <div @click="getImg" class="login-body-shadow-main">
                        点击刷新
                    </div>
            </div> 
            <div class="login-body-text">使用
            <span class="login-body-text-span">网易云音乐APP</span>扫码登录</div> 
        </div>
    
        <div class="login-bottom">
            <img src="../../assets/static/bg-login.png" alt="" class="login-bottom-img">
        </div>

    </div>
</template>
<script setup>
import { apiGetKey,apiGetQR,apiCheckLoginStatus } from "../../api/login";
import { ref } from "vue";
import { polling } from "../../utils";
const qrimg = ref(null);
const timeFail = ref(false)
const messageCode = ref(null);
let key = "";

const getImg = ()=>{
    timeFail.value = false;
    apiGetKey()
.then(
    (res)=>{
        if (res.data.code === 200) {
            key = res.data.data.unikey;
            return apiGetQR(key);
        }
        
    }
).then((res)=>{
    if (res.data.code === 200) {
        qrimg.value= res.data.data.qrimg;
        polling(()=>apiCheckLoginStatus(key),onStop,condition,2000)
    }
   
});
}

getImg();


const onStop = (res)=>{
    if (res.data.code === 800) {
        timeFail.value = true;
    } else if(res.data.code === 803){
        alert("授权登录成功")
    }
}

const condition = (res)=>{
    messageCode.value = res.data.code;
    return res.data.code === 800 || res.data.code === 803;
}


</script>
<style scoped lang="scss">
.login-main{
    padding-bottom: 12vw;
    background-color: #FDFBFC;
    height: 100vh;

}
.login-head{
    display: flex;
    height: 19vw;
    justify-content: space-between;
    align-items: center;
    padding-left: 5.5vw;
    padding-right: 5.5vw;
    @at-root &-left{
        font-size: 6vw;
        display: block;
    };
  
    @at-root &-right{
    font-size: 4vw;
    color: #696969;
   }
    
}
.login-body{
    position: relative;
    @at-root &-img{
        position: relative;
        height: 40vw;
        width: 40vw;
        margin: auto;
        z-index: 1;
        display: block;

    }
    @at-root &-text{
        font-size: 3vw;
        color: #100A09;
        text-align: center;
        margin-top: 10vw;
        @at-root &-span{
            color: #2C6AA1;
            margin-left: 1.5vw;
            margin-right: 1.5vw;
        }

    }
    @at-root &-shadow{
        
        z-index: 999;
        position: absolute;
        height: 40vw;
        width: 40vw;
        top: 0;
        left: 50%;
        display: block;
        transform: translateX(-50%);
        @at-root &-back{
            display: block;
            position: absolute;
            background-color: #DDDDDD;
            width: 40vw;
            height: 40vw;
            opacity: 0.6;
            z-index: 2;
        }
        @at-root &-main{
            position: absolute;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            z-index: 3;
            font-size: 3vw;
            text-align: center;
            transform: translate(-50%,-50%);
            border-radius: 200px;
            color: #fff;
            line-height: 7.6vw;
            height: 7.6vw;
            width: 20vw;
            top: 50%;
            left: 50%;
            display: block;
            background-image: linear-gradient(to right,#FF5A35, #F81227 );
        }
    }
}
.login-bottom{
    position: fixed;
    bottom: 0px;
    @at-root &-img{
        width: 100vw;
    }
}
.wangyi-img{
    display: block;
    width: 38vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7vw;
    margin-bottom: 9vw;
    max-width: 100%;
    height: auto;
}
.succuess-body{
    @at-root &-img{
        height: 41vw;
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
        display: block;
    }
    @at-root &-h1{
        margin: 0;
        height: 17vw;
        line-height: 17vw;
        text-align: center;
        font-size: 4vw;
        color: #04090C;
        font-weight: inherit;
    }
    @at-root &-p{
        color: #0F1619;
        font-size: 3.4vw;
        text-align: center;
        margin: 0;
    }
}
</style>