import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Movie from '~/components/Movie/';
import style from './ListMovie.module.scss';
import * as tvServices from '~/services/tvListService';

const cx = classNames.bind(style);
function ListMovie() {
    const [getMovieList, setGetMovieList] = useState([]);
    const movieType = useSelector((state) => state.movie.movieType);
    useEffect(() => {
        const fethApi = async () => {
            let type = movieType;
            const data = await tvServices.list(type);

            if (data) {
                setGetMovieList(data.results);
            }
        };
        fethApi();
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
