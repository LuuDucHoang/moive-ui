import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './MovieItem.module.scss';
import Image from '~/components/Image/';
const cx = classNames.bind(styles);
function MovieItem({ data }) {
    const newData = data;
    if (newData.i && newData.l) {
        return (
            <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
                <Image className={cx('poster')} src={data.i.imageUrl} alt={data.nickname + 'poster'}></Image>
                {console.log(newData)}
                <div className={cx('info')}>
                    <h4 className={cx('movie-name')}>
                        <span>{newData.l}</span>
                    </h4>
                    <span className={cx('movie-type')}>{data.s}</span>
                </div>
            </Link>
        );
    }
}
MovieItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default MovieItem;
