import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import Image from '~/components/Image';
import noImg from '~/assets/image/NoImg.png';
import style from './Movie.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Movie(data) {
    const movieType = useSelector((state) => state.movie.movieType);

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('btn-play')} to={`/${movieType}/${data.data.id}`}>
                <div className={cx('play-icon')}>
                    <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                </div>
            </Link>

            <div className={cx('ho')}>
                <Image
                    className={cx('poster')}
                    src={data.data.poster_path ? `https://image.tmdb.org/t/p/original/${data.data.poster_path}` : noImg}
                ></Image>
            </div>
            <h3 className={cx('movie-name')}>
                {data.data.original_title ? data.data.original_title : data.data.original_name}
            </h3>
            <div className={cx('movie-desc')}>
                <div>
                    <span>{data.data.release_date ? data.data.release_date : data.data.first_air_date}</span>
                    <span className={cx('dot')}></span>
                    <span>{data.data.vote_average}</span>
                </div>
                <div className={cx('type')}>{data.data.original_title ? 'Movie' : 'TV'}</div>
            </div>
            <div className={cx('quality')}>HD</div>
        </div>
    );
}

export default Movie;
