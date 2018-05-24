import Vue from 'vue'
import Router from 'vue-router'
import Index from './../pages/index.vue';
import Article from './../pages/article.vue';
import Category from './../pages/category.vue';
import Cate from './../pages/cate.vue';
import Page404 from './../pages/404.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/page/1',
            redirect: '/'
        },
        {
            path: '/page/:page',
            name: 'Page',
            component: Index
        },
        {
            path: '/category',
            name: 'Category',
            component: Category
        },
        {
            path: '/category/:id',
            name: 'Cate',
            component: Cate
        },
        {
            path: '/category/:id/page/:page',
            name: 'CatePage',
            component: Cate
        },
        {
            path: '/article/:id',
            name: 'Article',
            component: Article
        },
        {
            path: '*',
            name: 'Page404',
            component: Page404
        }
    ]
})
