import { Home, Blog, BlogPost, Contact, About } from "../pages";

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
        path: '/blogpost',
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
]

export default routes;
