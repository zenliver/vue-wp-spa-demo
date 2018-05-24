<template lang="html">
    <div id="article">
        <div class="container">
            <BreadCrumbs :breadcrumbText="'文章详情：'"></BreadCrumbs>
            <h2 class="article_title" v-text="article.title"></h2>
            <div class="article_detail" v-html="article.content"></div>
        </div>
    </div>
</template>

<script>
    import BreadCrumbs from './../components/breadcrumbs.vue';

    export default {
        components: {
            BreadCrumbs
        },
        data () {
            return {
                article: {}
            };
        },
        computed: {
            routeId () {
                return this.$route.params.id;
            }
        },
        methods: {
            getData () {
                this.$axios.get('/json-api/get_post/?include=id,title,content,date&id='+this.routeId).then( (response) => {
                    // console.log(response.data);
                    this.article = response.data.post;
                });
            }
        },
        mounted () {
            this.$nextTick(function () {
                this.getData();
            });
        }
    }
</script>

<style lang="less">
    .article_title {
        text-align: center;
    }
</style>
