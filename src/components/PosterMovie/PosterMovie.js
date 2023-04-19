import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import style from './PosterMovie.module.scss';

const cx = classNames.bind(style);

function PosterMovie() {
    return (
        <div>
            <div className={cx('poster')}>
                <Image
                    className={cx('film-poster')}
                    src={
                        'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/342190788_966458471390172_8815176649849049255_n.jpg?stp=dst-jpg_s640x640&_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=toU1qIkRJX4AX8mOX16&_nc_ht=scontent.fhan2-4.fna&oh=00_AfC4yQ8Fo7wnKQ2f5o8RNC-fwzKkXGGNybJIT-_6yrMoXA&oe=644404C3'
                    }
                ></Image>
                <div className={cx('rating')}>
                    <span className={cx('vote-rate')}>8.4</span>/ 118 voted
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
