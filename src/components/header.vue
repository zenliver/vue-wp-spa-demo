<template lang="html">
    <div id="header">
        <div class="container">
            <h1>Vue WordPress SPA Demo</h1>
            <div id="nav">
                <router-link :to="{name: 'Index'}">首页</router-link>
                <router-link :to="{name: 'Category'}">文章分类</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
    #header {
        h1 {
            text-align: center;
        }
    }
</style>
