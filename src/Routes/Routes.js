import Home from '~/Pages/Home/Home';
import AllFlim from '~/Pages/AllFlim';
import Detail from '~/Pages/Detail';
import config from '~/config';
import DetailLayout from '~/Layouts/DetailLayout';
import Seacrh from '~/Pages/Search';
import WatchPages from '~/Pages/WatchPages';
import TopPage from '~/Pages/TopPage';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.allfilm,
        component: AllFlim,
    },
    {
        path: config.routes.topList,
        component: TopPage,
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
    {
        path: config.routes.detailTV,
        component: Detail,
        Layout: DetailLayout,
    },
    {
        path: config.routes.watchMovie,
        component: WatchPages,
        Layout: DetailLayout,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
