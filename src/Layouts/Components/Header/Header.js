/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import HeaderSubNav from '~/components/HeaderSubNav';
import style from './Header.module.scss';
import { menuList } from '~/MenuList';
import Button from '~/components/Button';
import { movieTypeNav, Country } from '~/components/HeaderSubNav/LinkSubNav';
import MovieItem from '~/components/MovieItem';
const cx = classNames.bind(style);
function Header() {
    const datas = [
        {
            nickname: 'Beee',
            avatar: 'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/336781558_1267002150556847_7283300037436449316_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ecBJt-T3X1YAX8xDQ9o&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBtNk2fCd896H_sunRZNt2Y5nCTMmEnmsgY5eijJVrlxw&oe=643ABED2',
            full_name: 'Sieu nhan bee',
        },
        {
            nickname: 'Beee',
            avatar: 'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/336781558_1267002150556847_7283300037436449316_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ecBJt-T3X1YAX8xDQ9o&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBtNk2fCd896H_sunRZNt2Y5nCTMmEnmsgY5eijJVrlxw&oe=643ABED2',
            full_name: 'Sieu nhan bee',
        },
        {
            nickname: 'Beee',
            avatar: 'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/336781558_1267002150556847_7283300037436449316_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ecBJt-T3X1YAX8xDQ9o&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBtNk2fCd896H_sunRZNt2Y5nCTMmEnmsgY5eijJVrlxw&oe=643ABED2',
            full_name: 'Sieu nhan bee',
        },
    ];
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
                <Button leftIcon={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}>
                    <span>Login</span>
                </Button>
            </div>
            <div className={cx('search-wrapper')}>
                <h5 className={cx('search-header')}>Find Movies, TV shows and more</h5>
                <div className={cx('search-input-cop')}>
                    <div className={cx('search-icon')}>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </div>
                    <div className={cx('ccc')}>
                        <HeadlessTippy
                            interactive
                            render={() => (
                                <div className={cx('moive-item-wrapper')}>
                                    {datas.map((data) => (
                                        <div>
                                            <MovieItem data={data}></MovieItem>
                                        </div>
                                    ))}
                                </div>
                            )}
                            visible
                            content={'aaaaaaaaaaaaaa'}
                            placement="bottom-end"
                        >
                            <input className={cx('search-input')} placeholder="Entrer keyword..."></input>
                        </HeadlessTippy>
                    </div>
                    <div className={cx('go')}>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
