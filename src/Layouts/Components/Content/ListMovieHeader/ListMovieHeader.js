import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faCirclePlay, faList } from '@fortawesome/free-solid-svg-icons';

import style from './ListMovieHeader.module.scss';
import Button from '~/components/Button/';
const cx = classNames.bind(style);
function ListMovieHeader() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('header')}>Trending</h2>
            <div className={cx('button-wrapper')}>
                <Button
                    className={cx('tvshows', { btn: 'btn' })}
                    leftIcon={<FontAwesomeIcon icon={faList}></FontAwesomeIcon>}
                >
                    TV Shows
                </Button>
                <Button
                    className={cx('moviebtn', { btn: 'btn' })}
                    leftIcon={<FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>}
                >
                    <span>Movie</span>
                </Button>
            </div>
        </div>
    );
}

export default ListMovieHeader;
