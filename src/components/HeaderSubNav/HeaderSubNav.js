import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import style from './HeaderSubNav.module.scss';
const cx = classNames.bind(style);
function HeaderSubNav({ item, index, data }) {
    return (
        <HeadlessTippy
            key={index}
            visible
            interactive
            placement="bottom-start"
            render={() => (
                <div className={cx('bbbb')}>
                    <h2 className={cx('cc')}>Hii</h2>
                </div>
            )}
        >
            <li>
                <a href="">{item}</a>
            </li>
        </HeadlessTippy>
    );
}

export default HeaderSubNav;
