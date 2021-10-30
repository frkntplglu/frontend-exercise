import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { Card } from '@components/Card'
import { CardList } from '@components/CardList'
import { PageTitle } from '@components/PageTitle'
import { selectMovies, sortByAlphaAsc, sortByYearAsc } from '@features/entry/entrySlice'

export const Movies = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(selectMovies);

    const sortByYear = () => {
        dispatch(sortByYearAsc());
    }

    useEffect(() => {
        dispatch(sortByAlphaAsc());
        console.log("dispatched")
    },[dispatch])

    return (
        <div>
            <PageTitle title="Popular Movies"  />
            <div className="container">
                <button onClick={sortByYear}>Sort by year in descending</button>
            <CardList>
                {
                    movies.map((movie: any)  => <Card key={movie.title} title={movie.title} image={movie.images["Poster Art"].url} releaseYear={movie.releaseYear} />)
                }
            </CardList>
            </div>
        </div>
    )
}
