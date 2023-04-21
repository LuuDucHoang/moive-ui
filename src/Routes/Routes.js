import Home from '~/Pages/Home/Home';
import Seacrh from '~/Pages/Search';
import Detail from '~/Pages/Detail';
import config from '~/config';
import DetailLayout from '~/Layouts/DetailLayout';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.search,
        component: Seacrh,
    },
    {
        path: config.routes.detail,
        component: Detail,
        Layout: DetailLayout,
    },
    {
        path: config.routes.detailMovie,
        component: Detail,
        Layout: DetailLayout,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
