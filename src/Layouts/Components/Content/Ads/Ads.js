import classNames from 'classnames/bind';

import style from './Ads.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(style);
function Ads() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('banner')} src="https://i.imgur.com/KXMIIHH.gif"></Image>
            <div className={cx('banner-content')}>
                <div>Official Released</div>
                <div>
                    Download <span className={cx('yellow')}>HDtoday Android App</span> Now
                </div>
            </div>
        </div>
    );
}

export default Ads;
