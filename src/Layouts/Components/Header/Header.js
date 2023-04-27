/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';

import HeaderSubNav from '~/components/HeaderSubNav';
import style from './Header.module.scss';
import { menuList } from '~/MenuList';
import Button from '~/components/Button';
import { movieTypeNav, Country } from '~/components/HeaderSubNav/LinkSubNav';
import Search from '~/components/Search';

const cx = classNames.bind(style);
function Header() {
    const dispatch = useDispatch();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div
                    onClick={() => {
                        dispatch({
                            type: 'CHANGE',
                            payload: 'movie',
                        });
                    }}
                >
                    <Link to={'/'}>
                        <img
                            src="https://img.hdtoday.tv/xxrz/400x400/100/c4/93/c49337aa9c92d6fbf56b6b5830c6849c/c49337aa9c92d6fbf56b6b5830c6849c.png"
                            className={cx('logo')}
                        ></img>
                    </Link>
                </div>
                <ul className={cx('menu-list')}>
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
                                    <Link
                                        to={
                                            (item === 'movies' && `/list/movie`) ||
                                            (item === 'tv shows' && `/list/tv`) ||
                                            (item === 'top imdb' && `/toplist`)
                                        }
                                    >
                                        {item}
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </ul>
                <Button leftIcon={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}>
                    <span>Login</span>
                </Button>
            </div>
            <Search></Search>
        </header>
    );
}

export default Header;
