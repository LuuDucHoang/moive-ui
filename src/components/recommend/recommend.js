import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Movie from '~/components/Movie/';
import style from './recommend.module.scss';
import * as similarMovie from '~/services/getSimilarMovie';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(style);
function Recommend() {
    const [getMovieList, setGetMovieList] = useState([]);
    const { id, type } = useParams();

    useEffect(() => {
        const fethApi = async () => {
            const data = await similarMovie.similarMovie(id, type);

            if (data) {
                setGetMovieList(data.results);
            }
        };
        fethApi();
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
