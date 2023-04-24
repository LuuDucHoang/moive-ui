import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Movie from '~/components/Movie/';
import style from './recommend.module.scss';
import * as similarMovie from '~/services/getSimilarMovie';
import * as similarTv from '~/services/getSimilarTv';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(style);
function Recommend() {
    const [getMovieList, setGetMovieList] = useState([]);
    const { id, type } = useParams();

    useEffect(() => {
        if (type === 'movie') {
            const fethApi = async () => {
                const data = await similarMovie.similarMovie(id);

                if (data) {
                    setGetMovieList(data.results);
                }
            };
            fethApi();
        }
        if (type === 'tvshows') {
            const fethApi = async () => {
                const data = await similarTv.similarTv(id);

                if (data) {
                    setGetMovieList(data.results);
                }
            };
            fethApi();
        }
    }, [id, type]);

    return (
        <div className={cx('wrapper')}>
            {getMovieList.map((movie, index) => {
                return <Movie key={index} data={movie}></Movie>;
            })}
        </div>
    );
}

export default Recommend;
