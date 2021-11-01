import React,{FC, ChangeEvent} from 'react'
import "./sort.scss"

interface ISortProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void 
}

export const Sort:FC<ISortProps> = ({onChange}) => {
    return (
        <div className="sort-dropdown">
            <select defaultValue="asc-title" name="" id=""  onChange={e => onChange(e)}>
                <option value="title-asc">From A-Z</option>
                <option value="title-desc">From Z-A</option>
                <option value="releaseYear-asc">From Old to New</option>
                <option value="releaseYear-desc">From New To Old</option>
            </select>
        </div>
    )
}
