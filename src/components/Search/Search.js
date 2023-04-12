import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useDebounce } from '~/components/hooks';
import * as searchServices from '~/components/services/searchService';
import MovieItem from '~/components/MovieItem';
import style from './Search.module.scss';
const cx = classNames.bind(style);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
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
            headers: {
                'X-RapidAPI-Key': '46f5f5d3f5msh631aec3dffde13fp1ae3b3jsn67d84ecb3e73',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
            },
        };

        axios
            .request(options)
            .then(function (response) {
                setSearchResult(response.data.d);
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
    {
        console.log(searchResult);
    }
    return (
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
                                {searchResult.map((data, index) => (
                                    <div key={index}>
                                        <MovieItem data={data}></MovieItem>
                                    </div>
                                ))}
                            </div>
                        )}
                        visible
                        content={'aaaaaaaaaaaaaa'}
                        placement="bottom-end"
                    >
                        <input
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
