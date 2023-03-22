<template>
    <div>
        <div :class="'iconfont icon-'+type" style="font-size: .44rem;text-align: center;" ></div>
    </div>
</template>

<script>

import '@/static/iconfont.css'
    export default {
        props:['type'],
    }
</script>

<style lang="scss" scoped>

</style>