import { createRouter, createWebHistory } from 'vue-router';
import ProductList from "@/components/ProductList.vue";
import SaleList from "@/components/SaleList.vue";
import HomeView from "@/components/HomeView.vue";
import AboutPage from "@/components/AboutPage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/products',
        name: 'products',
        component: ProductList
    },
    {
        path: '/salelist',
        name: 'saleList',
        component: SaleList
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;