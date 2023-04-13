import classNames from 'classnames/bind';

import style from './Content.module.scss';
import Ads from './Ads';
import ListMovieHeader from './ListMovieHeader';
import Social from './Social';
import ListMovie from '~/components/ListMovie/ListMovie';
const cx = classNames.bind(style);
function Content() {
    return (
        <div className={cx('content-wrapper')}>
            <div className={cx('contact')}>
                <Social></Social>
                <Ads></Ads>
                <ListMovieHeader></ListMovieHeader>
                <ListMovie></ListMovie>
            </div>
        </div>
    );
}

export default Content;
