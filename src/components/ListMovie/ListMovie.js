import classNames from 'classnames/bind';
import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Movie from '~/components/Movie/';
import style from './ListMovie.module.scss';
import * as movieServices from '~/services/movieListService';
import * as tvServices from '~/services/tvListService';

const cx = classNames.bind(style);
function ListMovie() {
    const [getMovieList, setGetMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const movieType = useSelector((state) => state.movie.movieType);

    useEffect(() => {
        if (movieType === 'movie') {
            const fethApi = async () => {
                const data = await movieServices.movielist();

                if (data) {
                    setGetMovieList(data.results);
                }
            };
            fethApi();
        }
        if (movieType === 'tvshows') {
            const fethApi = async () => {
                const data = await tvServices.tvlist();

                if (data) {
                    setGetMovieList(data.results);
                }
            };
            fethApi();
        }
    }, [movieType]);

    return (
        <div className={cx('wrapper')}>
            {getMovieList.map((movie, index) => {
                return <Movie key={index} data={movie} type={movieType}></Movie>;
            })}
        </div>
    );
}

export default ListMovie;
