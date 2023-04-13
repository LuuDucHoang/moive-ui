import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import noImg from '~/assets/image/NoImg.png';
import style from './Movie.module.scss';

const cx = classNames.bind(style);

function Movie(data) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('ho')}>
                <Image className={cx('poster')} src={data.data.i ? data.data.i.imageUrl : noImg}></Image>
            </div>
            <h3 className={cx('movie-name')}>{data.data.l}</h3>
            <div className={cx('movie-desc')}>
                <div>
                    <span>{data.data.y ? data.data.y : 2022}</span>
                    <span className={cx('dot')}></span>
                    <span>{data.data.rank}</span>
                </div>
                <div className={cx('type')}>Movie</div>
            </div>
            <div className={cx('quality')}>HD</div>
        </div>
    );
}

export default Movie;
