/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';

import HeaderSubNav from '~/components/HeaderSubNav';
import style from './HeaderWthSearch.module.scss';
import { menuList } from '~/MenuList';
import Button from '~/components/Button';
import { movieTypeNav, Country } from '~/components/HeaderSubNav/LinkSubNav';
import LittleSearch from './LittleSearch/';
const cx = classNames.bind(style);
function HeaderWthSearch() {
    const dispatch = useDispatch();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('nav-wrapper')}>
                    <div
                        onClick={() => {
                            dispatch({
                                type: 'CHANGE',
                                payload: 'movie',
                            });
                        }}
                    >
                        <Link to={'/'}>
                            <img src={process.env.REACT_APP_IMGS} className={cx('logo')}></img>
                        </Link>
                    </div>
                    <ul className={cx('menu-list', { mlr10: 'mlr10' })}>
                        {menuList.map((item, index) => {
                            if (item === 'genre' || item === 'country') {
                                return (
                                    <div key={index}>
                                        <HeaderSubNav
                                            item={item}
                                            index={index}
                                            movieTypeNav={item === 'genre' && movieTypeNav}
                                            Country={item === 'country' && Country}
                                        ></HeaderSubNav>
                                    </div>
                                );
                            } else {
                                return (
                                    <li key={index}>
                                        <a href="/">{item}</a>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
                <div className={cx('login-search')}>
                    <LittleSearch></LittleSearch>
                    <Button className={cx('login-btn')} leftIcon={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}>
                        <span>Login</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default HeaderWthSearch;
