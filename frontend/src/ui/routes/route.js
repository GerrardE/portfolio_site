import { Home, Blog, BlogPost, Contact, Category, PageNotFound } from "../pages";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/blog/:id',
        component: BlogPost
    },
    {
        path: '/blog/:categoryid/category',
        component: Category
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '*',
        component: PageNotFound
    },
]

export default routes;
