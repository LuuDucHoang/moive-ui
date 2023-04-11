import Home from '~/Pages/Home/Home';
import Seacrh from '~/Pages/Search';
import config from '~/config';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.search,
        component: Seacrh,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
