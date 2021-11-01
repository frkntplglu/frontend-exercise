import React,{FC, ChangeEvent} from 'react'
import "./search.scss"
import search from "@assets/search.png"

interface ISearchProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void 
}

export const Search: FC<ISearchProps> = ({onChange}) => {
    return (
        <div className="search">
            <input type="text" placeholder="Search" className="search-input" onChange={e => onChange(e)} />
            <button className="search-button"><img src={search} alt="Search" /></button>
        </div>
    )
}
