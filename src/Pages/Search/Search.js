import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from './Search.module.scss';
import Movie from '~/components/Movie/Movie';
import Pagination from '~/components/Pagination';
import ListMovieHeader from '~/Layouts/Components/Content/ListMovieHeader';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(style);
function Search() {
    const { keyword } = useParams();
    const [searchResult, setSearchResult] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fethApi = async () => {
            const data = await searchServices.search(keyword, page);

            if (data) {
                setSearchResult(data.results);
            }
        };
        fethApi();
    }, [keyword, page]);

    return (
        <div className={cx('wrapper')}>
            <ListMovieHeader header={`Here are yours results about '${keyword}' `}></ListMovieHeader>
            <div className={cx('movie-wrap')}>
                {searchResult.map((item, index) => {
                    return (
                        <div key={index}>
                            <Movie data={item}></Movie>
                        </div>
                    );
                })}
            </div>
            {searchResult && (
                <div className={cx('Pagination')}>
                    <Pagination
                        className="pagination-bar"
                        currentPage={page}
                        totalCount={10}
                        pageSize={1}
                        onPageChange={(page) => {
                            setPage(page);
                            window.scroll({
                                top: '0',
                                behavior: 'smooth',
                            });
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default Search;
