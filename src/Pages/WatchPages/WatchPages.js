import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import style from './WatchPages.module.scss';
import DetailMovie from '~/components/DetailMovie/';
import ListMovieHeader from '~/Layouts/Components/Content/ListMovieHeader/';
import Recommend from '~/components/recommend/';
import Social from '~/Layouts/Components/Content/Social/';
import * as DetailService from '~/services/getDeatilService';

import * as VideoService from '~/services/getVideoService';

const cx = classNames.bind(style);
function WatchPages() {
    const { id, type } = useParams();
    const [detailData, setDetailData] = useState({});
    const [videos, setVideo] = useState('');
    useEffect(() => {
        if (type) {
            const fethApi = async () => {
                const data = await DetailService.detailItem(id, type);

                if (data) {
                    setDetailData(data);
                }
            };
            fethApi();
        }
        const fethApi = async () => {
            const data = await VideoService.getVideo(id, type);

            if (data) {
                for (let dat of data.results) {
                    if (dat.type === 'Trailer') {
                        setVideo(dat);
                        break;
                    }
                }
            }
        };
        fethApi();
    }, [id, type]);

    return (
        <div className={cx('wrapper')}>
            <span className={cx('path')}>{`Home / ${type} / ${
                detailData.original_title ? detailData.original_title : detailData.original_name
            }`}</span>
            <div className={cx('videoWrapper')}>
                <iframe
                    className={cx('video')}
                    // width="560"
                    // height="315"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${videos.key}`}
                ></iframe>
            </div>
            <div className={cx('social')}>
                <Social mt0></Social>
            </div>
            <div className={cx('detail')}>
                <DetailMovie m0 data={detailData}></DetailMovie>
            </div>
            <div className={cx('recom')}>
                <ListMovieHeader header="You may  also like :3"></ListMovieHeader>
                <Recommend></Recommend>
            </div>
        </div>
    );
}

export default WatchPages;
