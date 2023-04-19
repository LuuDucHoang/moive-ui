import classNames from 'classnames/bind';

import style from './DetailLayout.module.scss';
import HeaderWthSearch from './HeaderWthSearch/';
const cx = classNames.bind(style);
function DetailLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderWthSearch></HeaderWthSearch>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DetailLayout;
