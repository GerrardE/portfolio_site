import { Home, Blog, BlogPost, Contact } from "../pages";

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
]

export default routes;
