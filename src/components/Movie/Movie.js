import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';
import Image from '~/components/Image';
import noImg from '~/assets/image/NoImg.png';
import style from './Movie.module.scss';
import { Link } from 'react-router-dom';
import Detail from '~/Pages/Detail/Detail';
import { get } from '~/utils/httpRequest';

const cx = classNames.bind(style);
function Movie(data) {
    const dispatch = useDispatch();
    // const data2 = {
    //     name: 'Bee',
    //     poster: 'https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/336781558_1267002150556847_7283300037436449316_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-c73sS50Vl4AX9tzxkT&_nc_ht=scontent.fhan4-3.fna&oh=00_AfCQXmaM6zyHhseavsMxMzdfBxmYpiyOnv7EAg9FpqEF1A&oe=643EB352',
    //     year: 2002,
    //     time: '202m',
    // };

    if (data) {
        return (
            <div className={cx('wrapper')}>
                <Link
                    className={cx('btn-play')}
                    onClick={() => {
                        const moiveData = data.data;
                        dispatch({
                            type: 'ADD',
                            payload: moiveData,
                        });
                    }}
                    to={data.data.id}
                >
                    <div className={cx('play-icon')}>
                        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                    </div>
                </Link>
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
    // return (
    //     <div className={cx('wrapper')}>
    //         <Link to={data2.name} className={cx('btn-play')}>
    //             <div className={cx('play-icon')}>
    //                 <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
    //             </div>
    //         </Link>
    //         <div>
    //             <div className={cx('ho')}>
    //                 <Image className={cx('poster')} src={data2.poster}></Image>
    //             </div>
    //             <h3 className={cx('movie-name')}>{data2.name}</h3>
    //             <div className={cx('movie-desc')}>
    //                 <div>
    //                     <span>{data2.year}</span>
    //                     <span className={cx('dot')}></span>
    //                     <span>{data2.time}</span>
    //                 </div>
    //                 <div className={cx('type')}>Movie</div>
    //             </div>
    //             <div className={cx('quality')}>HD</div>
    //         </div>
    //     </div>
    // );
}

export default Movie;
