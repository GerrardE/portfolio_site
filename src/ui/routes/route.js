import { Home, Blog, BlogPost, Contact, PageNotFound } from "../pages";

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
        path: '/contact',
        component: Contact
    },
    {
        path: '*',
        component: PageNotFound
    },
]

export default routes;
