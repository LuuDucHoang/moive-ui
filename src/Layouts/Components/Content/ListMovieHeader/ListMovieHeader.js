import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faCirclePlay, faList } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import style from './ListMovieHeader.module.scss';
import Button from '~/components/Button/';

const cx = classNames.bind(style);

function ListMovieHeader({ button, header = '' }) {
    const [movieBtnActice, setMovieBtnActive] = useState(true);
    const [tvBtnActice, setTVBtnActive] = useState(false);
    const dispatch = useDispatch();

    const handleTvActive = () => {
        if (tvBtnActice === false) {
            setTVBtnActive(true);
            setMovieBtnActive(false);
            dispatch({
                type: 'CHANGE',
                payload: 'tv',
            });
        }
    };
    const handleMovieActive = () => {
        if (movieBtnActice === false) {
            setTVBtnActive(false);
            setMovieBtnActive(true);
            dispatch({
                type: 'CHANGE',
                payload: 'movie',
            });
        }
    };
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('header')}>{header}</h2>
            {button && (
                <div className={cx('button-wrapper')}>
                    <Button
                        onClick={handleMovieActive}
                        className={cx('moviebtn', { btn: 'btn', movieBtnActice })}
                        leftIcon={<FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>}
                    >
                        <span>Movie</span>
                    </Button>
                    <Button
                        onClick={handleTvActive}
                        className={cx('tvshows', { btn: 'btn', tvBtnActice })}
                        leftIcon={<FontAwesomeIcon icon={faList}></FontAwesomeIcon>}
                    >
                        TV Shows
                    </Button>
                </div>
            )}
        </div>
    );
}

ListMovieHeader.propTypes = {
    button: PropTypes.bool,
    header: PropTypes.string.isRequired,
};
export default ListMovieHeader;
