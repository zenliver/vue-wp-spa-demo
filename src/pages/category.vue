<template lang="html">
    <div id="category">
        <div class="container">
            <BreadCrumbs :breadcrumbText="'文章分类：'"></BreadCrumbs>
            <div class="article_cates">
                <div class="loading" v-if="showLoading">
                    <img src="./../assets/images/loading.png" alt="">
                </div>
                <div class="article_cate_item" v-for="postCate in postCates">
                    <h3>
                        <router-link :to="{ name: 'Cate', params: {id: postCate.id} }">{{postCate.name}}</router-link>
                    </h3>
                </div>
            </div>
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
                postCates: [],
                showLoading: false
            };
        },
        methods: {
            getData () {
                this.$axios.get('/wp-json/wp/v2/categories?parent=0&per_page=100').then( (response) => {
                    this.postCates = response.data;
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
</style>
