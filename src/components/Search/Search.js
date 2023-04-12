import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { useDebounce } from '~/components/hooks';
import MovieItem from '~/components/MovieItem';
import style from './Search.module.scss';
import { keyHeader } from '~/KeyHeader';
const cx = classNames.bind(style);
function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [inputBlur, setBlurInput] = useState(false);
    const debouncedValue = useDebounce(searchValue, 200);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: { q: debouncedValue },
            headers: keyHeader,
        };

        axios
            .request(options)
            .then(function (response) {
                let newApi = response.data.d;
                newApi.length = 5;
                setSearchResult(newApi);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [debouncedValue]);
    const hanldeChangInput = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };
    const handleHideResult = () => {
        setBlurInput(false);
    };
    return (
        <div className={cx('search-wrapper')}>
            <h5 className={cx('search-header')}>Find Movies, TV shows and more</h5>
            <div className={cx('search-input-cop')}>
                <div className={cx('search-icon')}>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </div>
                <div className={cx('ccc')}>
                    <HeadlessTippy
                        onClickOutside={handleHideResult}
                        visible={inputBlur && searchResult.length > 0}
                        interactive
                        render={() => (
                            <div className={cx('moive-item-wrapper')}>
                                {searchResult.map((data, index) => (
                                    <div className={cx('item-wrapper')} key={index}>
                                        <MovieItem data={data}></MovieItem>
                                    </div>
                                ))}
                            </div>
                        )}
                        placement="bottom-end"
                    >
                        <input
                            spellCheck={false}
                            onFocus={() => setBlurInput(true)}
                            ref={inputRef}
                            value={searchValue}
                            onChange={(e) => hanldeChangInput(e)}
                            className={cx('search-input')}
                            placeholder="Entrer keyword..."
                        ></input>
                    </HeadlessTippy>
                </div>
                <div className={cx('go')}>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
}

export default Search;
