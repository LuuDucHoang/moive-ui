import classNames from 'classnames/bind';
import { useEffect, useState, useCallback } from 'react';

import Movie from '~/components/Movie/';
import style from './ListMovie.module.scss';
import * as movieServices from '~/services/movieListService';

const cx = classNames.bind(style);
function ListMovie() {
    const [getMovieList, setGetMovieList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fethApi = async () => {
            const data = await movieServices.movielist(page);

            if (data) {
                setGetMovieList(data.results);
            }
        };
        fethApi();
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            {getMovieList.map((movie, index) => {
                return <Movie key={index} data={movie}></Movie>;
            })}
        </div>
    );
}

export default ListMovie;
