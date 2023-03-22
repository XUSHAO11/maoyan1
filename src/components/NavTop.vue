<template>
    <div class="hd">
        <header>
            <span>猫眼电影</span>
            
        </header>
        <div class="q"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hd{
    box-shadow: 0 .02rem #e8e8e8;
    position: relative;
}
header {
    position: fixed;
    left: 0;
    width: 100%;
    // width: 7.5rem;
    background-color: #e54847;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    z-index: 999;
   
}

span {
    
    font-size: .36rem;
    color: #ffffff;
}
.q{
    top: 1rem;
    width: 100%;
    height: 1rem;
}
</style>