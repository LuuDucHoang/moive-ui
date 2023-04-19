import classNames from 'classnames/bind';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import Movie from '~/components/Movie/';
import style from './ListMovie.module.scss';

const cx = classNames.bind(style);
function ListMovie() {
    const [getMovieList, setGetMovieList] = useState([]);

    useCallback(
        useEffect(() => {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/auto-complete',
                params: { q: 'Avenger' },
                headers: {
                    'X-RapidAPI-Key': 'd01f23bf46mshd08ca4d18817b2ep16a17fjsn4015aefe1531',
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
                },
            };

            axios
                .request(options)
                .then(function (response) {
                    console.log(response.data);
                    setGetMovieList(response.data.d);
                })
                .catch(function (error) {
                    console.error(error);
                });
        }, []),
    );

    return (
        <div className={cx('wrapper')}>
            {getMovieList.map((movie, index) => {
                return <Movie key={index} data={movie}></Movie>;
            })}
        </div>
    );
}

export default ListMovie;
