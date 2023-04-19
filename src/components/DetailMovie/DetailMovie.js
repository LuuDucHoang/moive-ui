import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPlay, faAdd, faVideo } from '@fortawesome/free-solid-svg-icons';

import style from './DetailMovie.module.scss';
import Button from '~/components/Button';
import PosterMovie from '~/components/PosterMovie';
const cx = classNames.bind(style);
function DetailMovie() {
    return (
        <div className={cx('wrapper')}>
            <PosterMovie></PosterMovie>
            <div className={cx('film-detail')}>
                <div className={cx('action-btn')}>
                    <Button
                        rounded
                        className={cx('btn-watch')}
                        leftIcon={<FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>}
                    >
                        Watch now
                    </Button>
                    <Button
                        rounded
                        className={cx('btn-add')}
                        leftIcon={<FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>}
                    >
                        Add to favorite
                    </Button>
                </div>
                <div className={cx('movie-title')}>
                    <Link>
                        <span>Ant-Man and the Wasp: Quantumania</span>
                    </Link>
                </div>
                <div className={cx('quality')}>
                    <Button className={cx('type')} leftIcon={<FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>}>
                        Trailer
                    </Button>
                    <Button className={cx('movie-quality')}>HD</Button>
                    <span className={cx('point')}>IMDB: N/A</span>
                </div>
                <p className={cx('movie-dres')}>
                    Superhero duo Scott Lang and Hope Van Dyne, together with Hope’s parents Hank Pym and Janet Van
                    Dyne, find themselves exploring the Quantum Realm, interacting with strange new creatures, and
                    embarking on an adventure that will push them beyond the limits of what they thought was possible.
                </p>
                <div className={cx('movie-info')}>
                    <div className={cx('info-wrapper')}>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Released: </span>
                            <span className={cx('detail')}> 2023-02-15</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Genre: </span>
                            <span className={cx('detail')}>Science Fiction, Adventure, Comedy</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Casts: </span>
                            <span className={cx('detail')}>
                                Paul Rudd, Ruben Rabasa, Evangeline Lilly, Bill Murray, Jonathan Majors
                            </span>
                        </div>
                    </div>
                    <div className={cx('info-wrapper')}>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Duration: </span>
                            <span className={cx('detail')}>120 min</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Country: </span>
                            <span className={cx('detail')}>United States of America</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Production: </span>
                            <span className={cx('detail')}>Kevin Feige Productions, Marvel Studios</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailMovie;
