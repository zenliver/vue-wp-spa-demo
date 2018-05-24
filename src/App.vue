<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/header.vue';
    import Footer from './components/footer.vue';

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="less">
    body {
        font-size: 18px;
        font-family: "Microsoft YaHei";
    }
    .container {
        width: 960px;
        margin: 0 auto;
    }
</style>
