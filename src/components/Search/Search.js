import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';

import { useDebounce } from '~/components/hooks';
import MovieItem from '~/components/MovieItem';
import style from './Search.module.scss';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(style);
function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [inputBlur, setBlurInput] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fethApi = async () => {
            const data = await searchServices.search(debouncedValue);

            if (data) {
                let newApi = data;
                newApi.results.length = 5;
                setSearchResult(newApi.results);
            }
        };
        fethApi();
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
