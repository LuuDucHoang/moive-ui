import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import style from './Detail.module.scss';
import DetailMovie from '~/components/DetailMovie/';
import Social from '~/Layouts/Components/Content//Social';
import ListMovie from '~/components/ListMovie/';
import ListMovieHeader from '~/Layouts/Components/Content//ListMovieHeader';
const cx = classNames.bind(style);
function Detail() {
    const movieData = useSelector((state) => state.movie);
    const data2 = {
        name: 'Bee',
        poster: 'https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/336781558_1267002150556847_7283300037436449316_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-c73sS50Vl4AX9tzxkT&_nc_ht=scontent.fhan4-3.fna&oh=00_AfCQXmaM6zyHhseavsMxMzdfBxmYpiyOnv7EAg9FpqEF1A&oe=643EB352',
        year: 2002,
        time: '202m',
    };
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('poster-background')}
                style={{
                    backgroundImage: `url(https://img.hdtoday.tv/xxrz/1200x600/394/5b/b8/5bb86591d7bc77be73ad38270c9dbdab/5bb86591d7bc77be73ad38270c9dbdab.jpg)`,
                }}
            >
                <Link to={data2.name} className={cx('btn-play')}>
                    <div className={cx('play-icon')}>
                        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                    </div>
                </Link>
            </div>
            <div className={cx('detail-movie-wrapper')}>
                <DetailMovie></DetailMovie>
            </div>
            <Social mt30></Social>
            <div className={cx('may-like')}>
                <ListMovieHeader></ListMovieHeader>
                <ListMovie></ListMovie>
            </div>
        </div>
    );
}

export default Detail;
