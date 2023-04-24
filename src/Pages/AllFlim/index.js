import classNames from 'classnames/bind';
import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Movie from '~/components/Movie/Movie';
import Pagination from '~/components/Pagination';
import * as movieServices from '~/services/movieListService';
import ListMovieHeader from '~/Layouts/Components/Content/ListMovieHeader';
import style from './AllFlim.module.scss';
const cx = classNames.bind(style);

function Seacrh() {
    const { type, pages } = useParams();
    const [MovieList, setGetMovieList1] = useState([]);
    const [page, setPage] = useState(1);
    const movieType = useSelector((state) => state.movie.movieType);
    console.log(pages);
    useEffect(() => {
        const fethApi = async () => {
            const data = await movieServices.movielist(page, type);
            if (data) {
                setGetMovieList1(data.results);
            }
        };
        fethApi();
    }, [page, type]);

    return (
        <div className={cx('wrapper')}>
            <ListMovieHeader header="All Films Page 'Enjoy :3'"></ListMovieHeader>
            <div className={cx('movie-wrap')}>
                {MovieList.map((movie, index) => {
                    return (
                        <div key={index}>
                            <Movie data={movie} type={movieType}></Movie>
                        </div>
                    );
                })}
            </div>
            {MovieList && (
                <div className={cx('Pagination')}>
                    <Pagination
                        type={type}
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

export default Seacrh;
