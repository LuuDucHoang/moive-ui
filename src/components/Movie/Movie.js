import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import style from './Movie.module.scss';

const cx = classNames.bind(style);
const data = {
    name: 'Bee',
    avt: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/336781558_1267002150556847_7283300037436449316_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-c73sS50Vl4AX9Ql09O&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCmcPODo1Zgt-HCpAvV5EbvbUE2exJeh8FiSiR6XOgGag&oe=643ABED2',
    year: '2002',
    long: '200m',
    type: 'Movie',
};
function Movie() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('poster')} src={data.avt}></Image>
            <h3 className={cx('movie-name')}>{data.name}</h3>
            <div className={cx('movie-desc')}>
                <div>
                    <span>{data.year}</span>
                    <span className={cx('dot')}></span>
                    <span>{data.long}</span>
                </div>
                <div className={cx('type')}>{data.type}</div>
            </div>
            <div className={cx('quality')}>HD</div>
        </div>
    );
}

export default Movie;
