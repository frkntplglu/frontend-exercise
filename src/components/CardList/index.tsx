import React, {FC} from 'react'
import "./cardlist.scss"

export const CardList:FC = ({children}) => {
    return (
        <div className="card-list">
            {children}
        </div>
    )
}
