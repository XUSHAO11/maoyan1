<template>
    <div>
        <div class="box" v-for="item in filmList">
            
            <div class="line01"></div>
            <!-- 电影封面 -->
            <div class="BoxLeft">
                <img :src="item.img" alt="" style="width: 100%;height: 100%;">
            </div>
            <!-- 电影介绍 -->
            <div class="textname">
                <div class="line"></div>
                <div style="margin-top: .28rem;">
                    <div class="text01">{{ item.nm }}</div>
                    <div class="text02" v-if="item.mk">观众评&nbsp;<span style="color: #faaf00;">{{ item.mk }}</span></div>
                    <div v-else class="text02">暂无评分</div>

                    <div class="text03">{{ item.desc }}</div>
                    <div class="text03">{{ item.showInfo }}</div>
                </div>

            </div>

            <!-- 购票按钮 -->
            <div style="text-align: center; line-height: .56rem;">
                <div class="btn" style="color:#ffffff;" v-if="item.showStateButton.content=='购票'">{{ item.showStateButton.content }}</div>
                <div class="btn" style="background-color:#09c5f0;color:#ffffff;" v-else="item.showStateButton.content=='预售'">{{ item.showStateButton.content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            filmList: []

        }
    },
    created() {
        axios.get('/xushao/api/mmdb/movie/v3/list/hot.json?ct=%E9%83%91%E5%B7%9E&ci=73&channelId=4').then((res) => {
            console.log(res.data.data.hot);
            this.filmList = [...res.data.data.hot]

        })
        // axios.get("/xushao/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4")
        //     .then(res => {
        //         console.log(res)
        //     })
    },
}
</script>

<style lang="scss" scoped>
.box {
 
    display: flex;
    align-items: center;
    position: relative;
    height: 2.29rem;
    // background-color: aquamarine;
   
}

.BoxLeft {
    float: left;
    width: 1.28rem;
    height: 1.8rem;
    background-color: black;
    margin: 0.27rem .2rem .24rem .3rem;
}

// 电影介绍
.textname {
    float: left;
    width: 5.72rem;
    height: 2.25rem;
}

.text01 {
    color: #333333;
    font-size: .34rem;
    // margin-right: .10rem;
}

.text02 {
    margin-top: .22rem;
    margin-bottom: .1rem;
    color: #666666;
}

.text03 {
    margin-bottom: .2rem;
    color: #666666;
    max-width: 3.11rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.btn {
    width: 1.08rem;
    height: .56rem;
    position: absolute;
    right: .28rem;
    background-color: #f03d37;
    border-radius: .28rem;
}

.line {
    width: 100%;
    height: .01rem;
    background-color: #e1e1e1;

}
</style>