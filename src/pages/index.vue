<template>
    <div id="index">
        <div class="container">
            <BreadCrumbs :breadcrumbText="'最新文章：'"></BreadCrumbs>
            <ArticleList :apiUrl="apiUrl"></ArticleList>
            <Pagination :isNotIndex="isNotIndex" :isPage2="isPage2" :routeName="'Page'" :routeParamsPrev="routeParamsPrev" :routeParamsNext="routeParamsNext"></Pagination>
        </div>
    </div>
</template>

<script>
    import BreadCrumbs from './../components/breadcrumbs.vue';
    import ArticleList from './../components/article_list.vue';
    import Pagination from './../components/pagination.vue';

    export default {
        components: {
            BreadCrumbs,
            ArticleList,
            Pagination
        },
        data () {
            return {
                apiBase: '/json-api/get_posts/?include=id,title,excerpt,date',
            };
        },
        computed: {
            routePage () {
                return this.$route.params.page;
            },
            routePath () {
                return this.$route.path;
            },
            apiUrl () {
                if (this.routePath.indexOf('page') < 0) {
                    return this.apiBase;
                } else {
                    return this.apiBase+'&page='+this.routePage;
                }
            },
            isNotIndex () {
                if (this.routePage === undefined) {
                    return false;
                } else {
                    return true;
                }
            },
            isPage2 () {
                // console.log(typeof(this.routePage));
                if (this.routePage == 2) {
                    return true;
                } else {
                    return false;
                }
            },
            routeParamsPrev () {
                if (this.routePage === undefined) {
                    return {};
                } else {
                    return {
                        page: this.routePage-1
                    };
                }
            },
            routeParamsNext () {
                if (this.routePage === undefined) {
                    return {
                        page: 2
                    };
                } else {
                    return {
                        page: this.routePage-0+1
                    };
                }
            }
        }
    }
</script>

<style lang="less">

</style>
