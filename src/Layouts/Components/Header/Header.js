/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import HeaderSubNav from '~/components/HeaderSubNav';
import style from './Header.module.scss';
import { menuList } from '~/MenuList';
import Button from '~/components/Button';
import { movieTypeNav, Country } from '~/components/HeaderSubNav/LinkSubNav';
const cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link to={'/'}>
                    <img
                        src="https://img.hdtoday.tv/xxrz/400x400/100/c4/93/c49337aa9c92d6fbf56b6b5830c6849c/c49337aa9c92d6fbf56b6b5830c6849c.png"
                        className={cx('logo')}
                    ></img>
                </Link>
                <ul className={cx('menu-list')}>
                    {menuList.map((item, index) => {
                        if (item == 'genre' || item == 'country') {
                            return (
                                <div key={index}>
                                    <HeaderSubNav
                                        item={item}
                                        index={index}
                                        movieTypeNav={item == 'genre' && movieTypeNav}
                                        Country={item == 'country' && Country}
                                    ></HeaderSubNav>
                                </div>
                            );
                        } else {
                            return (
                                <li key={index}>
                                    <a href="">{item}</a>
                                </li>
                            );
                        }
                    })}
                </ul>
                <Button leftIcon={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}>
                    <span>Login</span>
                </Button>
            </div>
            <div className={cx('search-wrapper')}>
                <h5 className={cx('search-header')}>Find Movies, TV shows and more</h5>
                <div>
                    <input className={cx('search-input')} placeholder="Entrer keyword..."></input>
                </div>
            </div>
        </header>
    );
}

export default Header;
