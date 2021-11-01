import React from 'react'
import { Card } from '@components/Card'
import { CardList } from '@components/CardList'
import { PageTitle } from '@components/PageTitle'
import series from "@assets/series.png"
import movies from "@assets/movies.png"
import { Link } from "react-router-dom"


export const Home = () => {
    return (
        <>
            <PageTitle title="Popular Titles"  />
            <div className="container">
            <CardList>
                <Link to="series"><Card title="Popular Series" image={series} /></Link>
                <Link to="movies"><Card title="Popular Movies" image={movies} /></Link>
            </CardList>
            </div>
        </>
    )
}
