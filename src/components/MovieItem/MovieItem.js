import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './MovieItem.module.scss';
import Image from '~/components/Image/';
import noImg from '~/assets/image/NoImg.png';

const cx = classNames.bind(styles);
function MovieItem({ data }) {
    if (data) {
        return (
            <Link className={cx('wrapper')}>
                <Image
                    className={cx('poster')}
                    src={data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` : noImg}
                    alt={data.original_title + 'poster'}
                ></Image>

                <div className={cx('info')}>
                    <h4 className={cx('movie-name')}>
                        <span>{data.original_title}</span>
                    </h4>
                    <span className={cx('movie-type')}>{data.release_date}</span>
                </div>
            </Link>
        );
    }
}
MovieItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default MovieItem;
