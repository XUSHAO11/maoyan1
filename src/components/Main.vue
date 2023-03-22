<template>
    <div class="main">
        <div class="mian01">
            <img src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png@80q" alt=""
                class="maoyanlog">
            <!-- <span class="span01">猫眼</span> -->
            <span class="span02">发现最新最热电影</span>
            <span class="sp03">打开App<i>></i></span>
        </div>
        <div class="main02">
            <div class="SpSize">
                <span style="color:#666666">郑州<i>🔻</i></span>
                <router-link :to="{ name: 'home' }" tag="div">
                    <span>热映</span>
                </router-link>
                <router-link :to="{ name: 'about' }" tag="div">
                    <span>影院</span>
                </router-link>
                <router-link :to="{ name: 'home1' }" tag="div">
                    <span>待映</span>
                </router-link>
                <router-link :to="{ name: 'home2' }" tag="div">
                    <span>经典电影</span>
                </router-link>
                <div style="line-height: 1.01rem;"><img
                        src="https://obj.pipi.cn/festatic/touchnode/resources/images/dpmmweb/component/index/img/base64/search-red.png"
                        alt="" class="logo"></div>
            </div>
        </div>
        <!-- <div class="bankuai"></div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo {
    width: .4rem;
    height: .4rem;
    display: inline-block;
}

.maoyanlog {
    position: absolute;
    top: .21rem;
    left: .23rem;
    width: 1.8rem;
    height: .76rem;
}

.mian01 {
    height: 1.16rem;
    position: relative;
    text-align: center;
    line-height: 1.16rem;
    box-shadow: 0 .02rem #f4f4f4;

    .span01 {
        font-size: 0.42rem;
        color: #f03d37;
    }

    .span02 {
        color: #666666;
        font-size: .28rem;
        margin-left: 3.25rem;
    }

    .sp03 {
        color: #b37e7e;
        font-size: 0.24rem;
        margin-left: .33rem;
    }
}

.main02 {
    position: relative;
    height: .88rem;
    box-shadow: 0 .02rem #f4f4f4;

    .SpSize {
        display: flex;
        justify-content: space-around;
        font-size: 0.3rem;
        text-align: center;
        line-height: .88rem;
    }
}

.main {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 999;
    // bottom:2.04rem ;
    box-shadow: 0 .02rem #e8e8e8;
    background-color: #ffffff;
}
.router-link-exact-active {
   font-weight: 800;
}
</style>