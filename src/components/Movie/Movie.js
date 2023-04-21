import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import Image from '~/components/Image';
import noImg from '~/assets/image/NoImg.png';
import style from './Movie.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);
function Movie(data) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <Link
                className={cx('btn-play')}
                onClick={() => {
                    const moiveData = data;
                    console.log(moiveData.data.original_title);
                    localStorage.setItem('id', moiveData.data.id);

                    dispatch({
                        type: 'INDEX',
                        payload: moiveData.data.id,
                    });
                }}
                // onClick={() => navigate(`/${data.data.original_title}`)}
                to={`/${data.data.id}`}
                // href={data.data.original_title}
            >
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
            <h3 className={cx('movie-name')}>{data.data.original_title}</h3>
            <div className={cx('movie-desc')}>
                <div>
                    <span>{data.data.release_date ? data.data.release_date : 2022}</span>
                    <span className={cx('dot')}></span>
                    <span>{data.data.vote_average}</span>
                </div>
                <div className={cx('type')}>Movie</div>
            </div>
            <div className={cx('quality')}>HD</div>
        </div>
    );
}

export default Movie;
