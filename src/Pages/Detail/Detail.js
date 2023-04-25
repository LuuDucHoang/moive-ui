import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from './Detail.module.scss';
import DetailMovie from '~/components/DetailMovie/';
import Social from '~/Layouts/Components/Content//Social';
import ListMovieHeader from '~/Layouts/Components/Content//ListMovieHeader';
import * as DetailService from '~/services/getDeatilService';
import * as DetailTVService from '~/services/getDetailTV';
import Recommend from '~/components/recommend';
import noImg from '~/assets/image/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';
const cx = classNames.bind(style);
function Detail() {
    const { type, id } = useParams();
    const [detailData, setDetailData] = useState({});
    useEffect(() => {
        const fethApi = async () => {
            const data = await DetailService.detailItem(id, type);

            if (data) {
                setDetailData(data);
            }
        };
        fethApi();
    }, [id, type]);
    let imgUrl;
    // eslint-disable-next-line no-lone-blocks
    {
        detailData.backdrop_path
            ? (imgUrl = `url(https://image.tmdb.org/t/p/original/${detailData.backdrop_path})`)
            : (imgUrl = `url(${noImg})`);
    }

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('poster-background')}
                style={{
                    backgroundImage: imgUrl,
                }}
            >
                <Link className={cx('btn-play')} to={`/watch/${type}/${id}`}>
                    <div className={cx('play-icon')}>
                        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                    </div>
                </Link>
            </div>
            <div className={cx('detail-movie-wrapper')}>
                <DetailMovie btn data={detailData}></DetailMovie>
            </div>
            <Social mt30></Social>
            <div className={cx('may-like')}>
                <ListMovieHeader header="You may  also like :3"></ListMovieHeader>
                <Recommend></Recommend>
            </div>
        </div>
    );
}

export default Detail;
