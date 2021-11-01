import React, { useState } from 'react'
import { useAppSelector } from '@store/hooks'
import { Card } from '@components/Card'
import { CardList } from '@components/CardList'
import { PageTitle } from '@components/PageTitle'
import { selectMovies, selectStatus } from '@features/entry/entrySlice'
import { Sort } from '@components/Sort'
import { sortByProperty } from '@helpers/sortByProperty'
import { sortFieldType, sortTypeType } from 'types/'




export const Movies = () => {
    const [sortField, setSortField] = useState<sortFieldType>("title");
    const [sortType, setSortType] = useState<sortTypeType>("asc");

    let movies = useAppSelector(selectMovies);
    const status = useAppSelector(selectStatus);
    
    const handleSort = (e: any) => {
        setSortField(e.target.value.split("-")[0])
        setSortType(e.target.value.split("-")[1])
    }


    return (
        <div>
            <PageTitle title="Popular Movies"  />
            <div className="container">
                <Sort onChange={handleSort} />
            <CardList>
                {
                    status === "loading" ? "Loading..." :
                    sortByProperty(movies, sortField, sortType).map((movie: any)  => <Card key={movie.title} title={movie.title} image={movie.images["Poster Art"].url} releaseYear={movie.releaseYear} />)
                }
            </CardList>
            </div>
        </div>
    )
}
