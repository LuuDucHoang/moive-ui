import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import style from './Home.module.scss';
import ListMovieHeader from '~/Layouts/Components/Content/ListMovieHeader';
import Social from '~/Layouts/Components/Content/Social';
import ListMovie from '~/components/ListMovie/ListMovie';
import Button from '~/components/Button';
const cx = classNames.bind(style);
function Home() {
    const movieType = useSelector((state) => state.movie.movieType);

    return (
        <div className={cx('content-wrapper')}>
            <Social></Social>
            <ListMovieHeader button header="Trending"></ListMovieHeader>
            <ListMovie></ListMovie>
            <div className={cx('view-all')}>
                <Button to={`/list/${movieType}`}>View ALL</Button>
            </div>
        </div>
    );
}

export default Home;
