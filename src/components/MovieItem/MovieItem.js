import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './MovieItem.module.scss';
import Image from '~/components/Image/';
const cx = classNames.bind(styles);
function MovieItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname + 'Avatar'}></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                </h4>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}
MovieItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default MovieItem;