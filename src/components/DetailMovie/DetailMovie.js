import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPlay, faAdd, faVideo } from '@fortawesome/free-solid-svg-icons';

import style from './DetailMovie.module.scss';
import Button from '~/components/Button';
import PosterMovie from '~/components/PosterMovie';
const cx = classNames.bind(style);
function DetailMovie(data) {
    const moive = data.data;
    const handleRenderArray = (item, index) => {
        if (index < moive.genres.length - 1) {
            return (
                <span key={index} className={cx('detail')}>
                    {item.name}
                    <span>, </span>
                </span>
            );
        }
        if ((index = moive.genres.length - 1)) {
            return (
                <span key={Math.random()} className={cx('detail')}>
                    {item.name}
                </span>
            );
        }
    };
    return (
        <div className={cx('wrapper')}>
            <PosterMovie data={data.data}></PosterMovie>
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
                        <span>{data.data.original_title}</span>
                    </Link>
                </div>
                <div className={cx('quality')}>
                    <Button className={cx('type')} leftIcon={<FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>}>
                        {data.data.status}
                    </Button>
                    <Button className={cx('movie-quality')}>HD</Button>
                    <span className={cx('point')}>IMDB: N/A</span>
                </div>
                <p className={cx('movie-dres')}>{data.data.overview}</p>
                <div className={cx('movie-info')}>
                    <div className={cx('info-wrapper')}>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Released: </span>
                            <span className={cx('detail')}> {data.data.release_date}</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Genre: </span>
                            {moive.genres ? moive.genres.map((movie, index) => handleRenderArray(movie, index)) : ''}
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Casts: </span>
                            <span className={cx('detail')}>Paul Rudd, Ruben Rabasa, Evangeline Lilly, Bill Murray</span>
                        </div>
                    </div>
                    <div className={cx('info-wrapper')}>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Duration: </span>
                            <span className={cx('detail')}>{moive.runtime} min</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Country: </span>
                            <span className={cx('detail')}>
                                {moive.production_countries
                                    ? moive.production_countries.map((count, index) => handleRenderArray(count, index))
                                    : ''}
                            </span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info')}>Production: </span>
                            <span className={cx('detail')}>
                                {moive.production_companies
                                    ? moive.production_companies.map((count, index) => handleRenderArray(count, index))
                                    : ''}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailMovie;
