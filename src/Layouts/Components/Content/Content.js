import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';

import style from './Content.module.scss';
import Ads from './Ads';
import ListMovieHeader from './ListMovieHeader';
import Social from './Social';
import Movie from '~/components/Movie/';
const cx = classNames.bind(style);
function Content() {
    return (
        <div className={cx('content-wrapper')}>
            <div className={cx('contact')}>
                <Social></Social>
                <Ads></Ads>
                <ListMovieHeader></ListMovieHeader>
                <div>
                    <Movie></Movie>
                </div>
            </div>
        </div>
    );
}

export default Content;
