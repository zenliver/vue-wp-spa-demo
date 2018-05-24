<template lang="html">
    <div id="article_list">
        <div class="container">
            <BreadCrumbs :breadcrumbText="'分类下的所有文章：'"></BreadCrumbs>
            <ArticleList :apiUrl="apiUrl"></ArticleList>
            <Pagination :isNotIndex="isNotIndex" :isPage2="isPage2" :routeName="'CatePage'" :routeParamsPrev="routeParamsPrev" :routeParamsNext="routeParamsNext"></Pagination>
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
                apiBase: '/json-api/get_category_posts/?include=id,title,excerpt,date&id=',
            };

        },
        computed: {
            routeId () {
                return this.$route.params.id;
            },
            routePage () {
                return this.$route.params.page;
            },
            routePath () {
                return this.$route.path;
            },
            apiUrl () {
                if (this.routePath.indexOf('page') < 0) {
                    return this.apiBase+this.routeId;
                } else {
                    return this.apiBase+this.routeId+'&page='+this.routePage;
                }
            },
            isNotIndex () {
                if (this.routePath.indexOf('page') >= 0) {
                    return true;
                } else {
                    return false;
                }
            },
            isPage2 () {
                if (this.routePage == '2') {
                    return true;
                } else {
                    return false;
                }
            },
            routeParamsPrev () {
                if (!(this.isNotIndex)) {
                    return {};
                } else {
                    return {
                        id: this.routeId,
                        page: this.routePage-1
                    };
                }
            },
            routeParamsNext () {
                if (!(this.isNotIndex)) {
                    return {
                        id: this.routeId,
                        page: 2
                    };
                } else {
                    return {
                        id: this.routeId,
                        page: this.routePage-0+1
                    };
                }
            }
        }
    }
</script>

<style lang="less">

</style>
