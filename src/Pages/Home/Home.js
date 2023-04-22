import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import style from './Home.module.scss';
import ListMovieHeader from '~/Layouts/Components/Content/ListMovieHeader';
import Social from '~/Layouts/Components/Content/Social';
import ListMovie from '~/components/ListMovie/ListMovie';

const cx = classNames.bind(style);
function Home() {
    const movieType = useSelector((state) => state.movie.movieType);
    console.log(movieType);
    return (
        <div className={cx('content-wrapper')}>
            <Social></Social>
            <ListMovieHeader></ListMovieHeader>
            <ListMovie></ListMovie>
        </div>
    );
}

export default Home;
