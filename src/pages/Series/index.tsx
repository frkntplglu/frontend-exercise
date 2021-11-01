import React,{useState} from 'react'
import { useAppSelector } from '@store/hooks'
import { Card } from '@components/Card'
import { CardList } from '@components/CardList'
import { PageTitle } from '@components/PageTitle'
import { Entry, selectSeries } from '@features/entry/entrySlice'
import { Sort } from '@components/Sort'

const sortByProperty = (array: Entry[], propertyName: "releaseYear" | "title", sortType: "asc" | "desc") => {
    return array.sort((a: any, b: any)  => {
        if(propertyName === "releaseYear"){
            if(sortType === "asc") return a[propertyName] - b[propertyName];
            return b[propertyName] - a[propertyName];
        } else{
            if(sortType === "asc") return a[propertyName].toLowerCase() > b[propertyName].toLowerCase() ? 1 : -1;
            return b[propertyName].toLowerCase() > a[propertyName].toLowerCase() ? 1 : -1;
        }
        
    });
}

export const Series = () => {
    const [sortField, setSortField] = useState<"releaseYear" | "title">("title");
    const [sortType, setSortType] = useState<"asc" | "desc">("asc");
    const series = useAppSelector(selectSeries);

    const handleSort = (e: any) => {
        setSortField(e.target.value.split("-")[0])
        setSortType(e.target.value.split("-")[1])
    }

    return (
        <div>
            <PageTitle title="Popular Series"  />
            <div className="container">
            <Sort onChange={handleSort} />
            <CardList>
                {
                    sortByProperty(series, sortField, sortType).map((serie : any)  => <Card key={serie.title} title={serie.title} image={serie.images["Poster Art"].url} releaseYear={serie.releaseYear} />)
                }
            </CardList>
            </div>
        </div>
    )
}
