import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import style from './PosterMovie.module.scss';

const cx = classNames.bind(style);

function PosterMovie(data) {
    return (
        <div>
            <div className={cx('poster')}>
                <Image
                    className={cx('film-poster')}
                    src={`https://image.tmdb.org/t/p/original/${data.data.poster_path}`}
                ></Image>
                <div className={cx('rating')}>
                    <span className={cx('vote-rate')}>{data.data.vote_average}</span>/ {data.data.vote_count}
                    <div className={cx('progress')}>
                        <div role="progressbar" className={cx('rating-progress')}></div>
                    </div>
                </div>
                <div className={cx('action-btn')}>
                    <Button
                        className={cx('btn', { like: 'like' })}
                        leftIcon={<FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>}
                    >
                        LIKE
                    </Button>
                    <Button
                        className={cx('btn', { dislike: 'dislike' })}
                        leftIcon={<FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>}
                    >
                        DISLIKE
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PosterMovie;