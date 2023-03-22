<template>
    <div>
        <div class="NarBar">
            <div class="bar">
                <router-link :to="{ name: 'home' }" tag="div">
                    <span>
                        <icon type="dianyingyuan"></icon>
                        电影/影院
                    </span>
                </router-link>
                <router-link :to="{ name: 'about' }" tag="div">
                    <span>
                        <icon type="shipin1"></icon>
                        视频
                    </span>

                </router-link>
                <router-link :to="{ name: 'home1' }" tag="div">
                    <span>
                        <icon type="shipin"></icon>
                        小视频
                    </span>
                </router-link>
                <router-link :to="{ name: 'home2' }" tag="div">
                    <span>
                        <icon type="yanchu-xianxing2-0"></icon>
                        演出
                    </span>
                </router-link>
                <router-link :to="{ name: 'home3' }" tag="div">
                    <span>
                        <icon type="wode"></icon>
                        我的
                    </span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import icon from '@/components/Icon.vue'

export default {
    components: {
        icon
    }
}
</script>

<style lang="scss" scoped>
.NarBar {
    position: relative;
    position: fixed;
    left: 0;
    width: 100%;
    height: .96rem;
    background-color: #ffffff;
    bottom: 0;
    z-index: 9999;
    border-top: 2px solid #e1e1e1;

    display: flex;
    align-items: center;

    // span {
    //     font-size: .2rem;
    //     display: flex;
    //     flex-direction: column;
    //     height: 100%;
    // }
}

.bar {
    display: flex;
width: 100%;
    color: #696969;
div{
    flex: 1;
    text-align: center;
}
}

.router-link-exact-active {
    color: #f03037;
}
</style>