import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import style from './Detail.module.scss';
import DetailMovie from '~/components/DetailMovie/';
import Social from '~/Layouts/Components/Content//Social';
import ListMovie from '~/components/ListMovie/';
import ListMovieHeader from '~/Layouts/Components/Content//ListMovieHeader';
import * as DetailService from '~/services/getDeatilService';
import * as DetailTVService from '~/services/getDetailTV';
const cx = classNames.bind(style);
function Detail() {
    const { type, id } = useParams();
    const [detailData, setDetailData] = useState({});
    const movieType = useSelector((state) => state.movie.movieType);
    console.log(movieType);
    console.log(id, type);

    useEffect(() => {
        if (type === 'movie') {
            const fethApi = async () => {
                const data = await DetailService.detailItem(id);

                if (data) {
                    setDetailData(data);
                }
            };
            fethApi();
        }
        if (type === 'tvshows') {
            const fethApi = async () => {
                const data = await DetailTVService.detailItem(id);

                if (data) {
                    setDetailData(data);
                }
            };
            fethApi();
        }
    }, [id, type]);
    {
        console.log(detailData);
    }
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('poster-background')}
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${detailData.backdrop_path})`,
                }}
            >
                <Link className={cx('btn-play')}>
                    <div className={cx('play-icon')}>
                        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                    </div>
                </Link>
            </div>
            <div className={cx('detail-movie-wrapper')}>
                <DetailMovie data={detailData}></DetailMovie>
            </div>
            <Social mt30></Social>
            {/* <div className={cx('may-like')}>
                <ListMovieHeader></ListMovieHeader>
                <ListMovie></ListMovie>
            </div> */}
        </div>
    );
}

export default Detail;
