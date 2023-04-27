import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import style from './TopPage.module.scss';
import Movie from '~/components/Movie/Movie';
import Pagination from '~/components/Pagination';
import ListMovieHeader from '~/Layouts/Components/Content/ListMovieHeader';
import * as TopList from '~/services/topListService';
const cx = classNames.bind(style);
function TopPage() {
    const { keyword } = useParams();
    const [searchResult, setSearchResult] = useState([]);
    const [page, setPage] = useState(1);
    const movieType = useSelector((state) => state.movie.movieType);

    useEffect(() => {
        const fethApi = async () => {
            const data = await TopList.list(movieType, page);

            if (data) {
                setSearchResult(data.results);
            }
        };
        fethApi();
    }, [movieType, page]);

    return (
        <div className={cx('wrapper')}>
            <ListMovieHeader header={`Top  IMDB`} button={true}></ListMovieHeader>
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
                        totalCount={500}
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

export default TopPage;
