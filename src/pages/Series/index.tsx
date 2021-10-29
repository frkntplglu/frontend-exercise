import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { Card } from '../../components/Card'
import { CardList } from '../../components/CardList'
import { PageTitle } from '../../components/PageTitle'
import { selectSeries } from '../../features/entry/entrySlice'

export const Series = () => {
    const series = useAppSelector(selectSeries);
    return (
        <div>
            <PageTitle title="Popular Series"  />
            <div className="container">
            <CardList>
                {
                    series.map(serie  => <Card key={serie.title} title={serie.title} image={serie.images["Poster Art"].url} releaseYear={serie.releaseYear} />)
                }
            </CardList>
            </div>
        </div>
    )
}
