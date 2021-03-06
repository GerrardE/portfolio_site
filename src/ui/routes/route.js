import { Home, Blog, BlogPost, Contact, About, PageNotFound } from "../pages";

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
        path: '/about',
        component: About
    },
    {
        path: '*',
        component: PageNotFound
    },
]

export default routes;
