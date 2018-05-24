<template>
    <div class="article_list">
        <div class="loading" v-if="showLoading">
            <img src="./../assets/images/loading.png" alt="">
        </div>
        <div class="load_error" v-if="showLoadError">抱歉，内容加载失败。</div>
        <div class="no_article" v-if="showNoArticle">抱歉，暂无内容。</div>
        <div class="article_item" v-for="post in posts">
            <h4 class="artcile_title">
                <router-link :to="{ name: 'Article', params: {id: post.id} }">{{post.title}}</router-link>
            </h4>
            <div class="article_desc" v-html="post.excerpt"></div>
            <div class="article_time" v-html="post.date"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                posts: [],
                showLoading: false,
                showLoadError: false,
                showNoArticle: false
            };
        },
        props: {
            apiUrl: {
                type: String,
                required: true
            }
        },
        methods: {
            getData () {

                this.$axios.interceptors.request.use(config => {
                  //在发送请求之前做某事，比如说 设置loading动画显示
                  // console.log(this.$el);
                  // this.$nprogress.start();
                  this.posts = [];
                  // this.showLoading = true;
                  return config;
                }, error => {
                  //请求错误时做些事
                  return Promise.reject(error);
              });

              this.$axios.interceptors.response.use( (response) => {
                  // 对响应数据做点什么
                  // this.$nprogress.done();
                  this.showLoading = false;
                  return response;
              },  (error) => {
                  // 对响应错误做点什么
                  // this.$nprogress.done();
                  this.showLoadError = true;

                  return Promise.reject(error);
              });

                // var thisNew = this; // 如果使用箭头函数不需要另外指代this
                this.$axios.get(this.apiUrl).then(
                    (response) => {
                    // console.log(response);
                    this.posts = response.data.posts;
                    if (this.posts.length == 0) {
                        this.showNoArticle = true;
                    } else {
                        this.showNoArticle = false;
                    }
                    // console.log(this);
                }).catch( (error) => {
                    console.log(error);
                });
            }
        },
        mounted () {
            // console.log('component mounted');
            // this.$nameAlert('李','小梅');

            this.$nextTick(function () {
                this.getData();
            });
        },
        watch: {
            $route (to, from) {
                // console.log('当前路由：'+this.$route.path);
                this.getData();
                // 返回顶部
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                // console.log(to);
                // console.log(from);
            }
        }
    }
</script>

<style lang="less">
    .loading {
        text-align: center;
        img {
            width: 30px;
            animation: rotate 3s linear infinite;
        }
    }
    @keyframes rotate {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
