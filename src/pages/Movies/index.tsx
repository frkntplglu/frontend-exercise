import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { Card } from '../../components/Card'
import { CardList } from '../../components/CardList'
import { PageTitle } from '../../components/PageTitle'
import { selectMovies } from '../../features/entry/entrySlice'

export const Movies = () => {
    const movies = useAppSelector(selectMovies);
    return (
        <div>
            <PageTitle title="Popular Movies"  />
            <div className="container">
            <CardList>
                {
                    movies.map(movie  => <Card key={movie.title} title={movie.title} image={movie.images["Poster Art"].url} />)
                }
            </CardList>
            </div>
        </div>
    )
}
