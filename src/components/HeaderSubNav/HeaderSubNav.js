import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import style from './HeaderSubNav.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function HeaderSubNav({ item, index, movieTypeNav = false, Country = false }) {
    let data = [];
    if (movieTypeNav) {
        data = movieTypeNav;
    }
    if (Country) {
        data = Country;
    }

    return (
        <HeadlessTippy
            key={index}
            interactive
            placement="bottom-start"
            render={() => (
                <div className={cx('wrapper')}>
                    <ul className={cx('subnav-wrapper', { Country, movieTypeNav })}>
                        {data.map((dataItem, index) => {
                            return (
                                <li key={index} className={cx('list-item')}>
                                    <Link to={dataItem.path} className={cx('data-item')}>
                                        {dataItem.type}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
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
