import React,{useState} from 'react'
import { useAppSelector } from '@store/hooks'
import { Card } from '@components/Card'
import { CardList } from '@components/CardList'
import { PageTitle } from '@components/PageTitle'
import { selectSeries, selectStatus } from '@features/entry/entrySlice'
import { Sort } from '@components/Sort'
import { sortByProperty } from '@helpers/sortByProperty'
import { sortFieldType, sortTypeType } from 'types/'

export const Series = () => {
    const [sortField, setSortField] = useState<sortFieldType>("title");
    const [sortType, setSortType] = useState<sortTypeType>("asc");
    const status = useAppSelector(selectStatus);
    const series = useAppSelector(selectSeries);

    const handleSort = (e: any) => {
        setSortField(e.target.value.split("-")[0])
        setSortType(e.target.value.split("-")[1])
    }

    return (
        <>
            <PageTitle title="Popular Series"  />
            <div className="container">
                <Sort onChange={handleSort} />
                {
                    status === "loading" ? "Loading..." :
                    status === "failed" ? "Oops, something went wrong..." :
                    <CardList>
                        {sortByProperty(series, sortField, sortType).map((movie: any)  => <Card key={movie.title} title={movie.title} image={movie.images["Poster Art"].url} />)}
                    </CardList>
                }
            </div>
        </>
    )
}
