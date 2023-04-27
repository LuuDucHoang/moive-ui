import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Image from '~/components/Image';
import noImg from '~/assets/image/NoImg.png';
import style from './Movie.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Movie(data) {
    const movieType = useSelector((state) => state.movie.movieType);
    const { type } = useParams();

    return (
        <div className={cx('wrapper')}>
            <div
                onClick={() => {
                    window.scroll({
                        top: '0',
                        behavior: 'smooth',
                    });
                }}
            >
                <Link className={cx('btn-play')} to={`/${type ? type : movieType}/${data.data.id}`}>
                    <div className={cx('play-icon')}>
                        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                    </div>
                </Link>
            </div>

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
Movie.propTyoes = {
    data: PropTypes.object.isRequired,
};

export default Movie;
