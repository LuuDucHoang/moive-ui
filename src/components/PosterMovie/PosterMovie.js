import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import style from './PosterMovie.module.scss';
import noImg from '~/assets/image/NoImg.png';

const cx = classNames.bind(style);

function PosterMovie(data) {
    return (
        <div>
            <div className={cx('poster')}>
                <Image
                    className={cx('film-poster')}
                    src={
                        data.data.poster_path ? `${process.env.REACT_APP_backdrop_path}${data.data.poster_path}` : noImg
                    }
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

PosterMovie.propTypes = {
    data: PropTypes.object.isRequired,
};
export default PosterMovie;
