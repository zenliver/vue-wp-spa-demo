<template lang="html">
    <div class="pagination">
        <span v-if="isNotIndex">
            <router-link v-if="isPage2" :to="page2Params">上一页</router-link>
            <router-link v-else :to="{ name: routeName, params: routeParamsPrev }">上一页</router-link>
        </span>
        <span>
            <router-link :to="{ name: routeName, params: routeParamsNext }">下一页</router-link>
        </span>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            };
        },
        computed: {
            routeId () {
                return this.$route.params.id;
            },
            routePath () {
                return this.$route.path;
            },
            page2Params () {
                if (this.routePath.indexOf('category') >= 0) {
                    return {
                        name: 'Cate',
                        params: {
                            id: this.routeId
                        }
                    };
                } else {
                    return {
                        name: 'Index',
                    };
                }
            }
        },
        props: {
            isNotIndex: {
                type: Boolean,
                required: true
            },
            isPage2: {
                type: Boolean,
                // required: true
            },
            routeName: {
                type: String,
                required: true
            },
            routeParamsPrev: {
                type: Object,
                // required: true
            },
            routeParamsNext: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="less">
    .pagination {
        text-align: center;
        span {
            padding-left: 10px;
            padding-right: 10px;
        }
    }
</style>
