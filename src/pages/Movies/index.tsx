import React, { useState } from 'react'
import { useAppSelector } from '@store/hooks'
import { Card } from '@components/Card'
import { CardList } from '@components/CardList'
import { PageTitle } from '@components/PageTitle'
import { selectMovies, selectStatus } from '@features/entry/entrySlice'
import { Sort } from '@components/Sort'
import { sortByProperty } from '@helpers/sortByProperty'
import { sortFieldType, sortTypeType } from 'types/'
import { Search } from '@components/Search'

export const Movies = () => {
    const [sortField, setSortField] = useState<sortFieldType>("title");
    const [sortType, setSortType] = useState<sortTypeType>("asc");
    const [search, setSearch] = useState<string>("");

    let movies = useAppSelector(selectMovies);
    const status = useAppSelector(selectStatus);
    
    const handleSort = (e: any) => {
        setSortField(e.target.value.split("-")[0])
        setSortType(e.target.value.split("-")[1])
    }

    const handleChange = (e: any) => {
        if(e.target.value.length > 0 && e.target.value.length < 3) return;
        setSearch(e.target.value);
    }

    return (
        <>
            <PageTitle title="Popular Movies"  />
            <div className="container">
                <div className="search-wrapper">
                    <Search onChange={handleChange} />
                    <Sort onChange={handleSort} />
                </div>
                {
                    status === "loading" ? "Loading..." :
                    status === "failed" ? "Oops, something went wrong..." :
                    <CardList>
                        {
                        sortByProperty(movies, sortField, sortType)
                        .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                        .map((movie: any)  => <Card key={movie.title} title={movie.title} image={movie.images["Poster Art"].url} />)
                        }
                    </CardList>
                }
            </div>
        </>
    )
}
