import React from 'react'
import { Card } from '../../components/Card'
import { CardList } from '../../components/CardList'
import { PageTitle } from '../../components/PageTitle'
import series from "../../assets/series.png"
import movies from "../../assets/movies.png"


export const Home = () => {
    return (
        <div>
            <PageTitle title="Popular Series"  />
            <div className="container">
            <CardList>
                <Card title="Popular Series" image={series} />
                <Card title="Popular Movies" image={movies} />
            </CardList>
            </div>
        </div>
    )
}
