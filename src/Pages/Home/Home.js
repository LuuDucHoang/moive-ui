import classNames from 'classnames/bind';

import style from './Home.module.scss';
import ListMovieHeader from '~/Layouts/Components/Content/ListMovieHeader';
import Social from '~/Layouts/Components/Content/Social';
import ListMovie from '~/components/ListMovie/ListMovie';

const cx = classNames.bind(style);
function Home() {
    return (
        <div className={cx('content-wrapper')}>
            <Social></Social>
            <ListMovieHeader button header="Trending"></ListMovieHeader>
            <ListMovie></ListMovie>
        </div>
    );
}

export default Home;
