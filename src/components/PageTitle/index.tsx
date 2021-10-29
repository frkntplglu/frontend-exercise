import React, {FC} from 'react'
import "./pagetitle.scss"

interface IPageTitleProps {
    title: string
}

export const PageTitle: FC<IPageTitleProps> = ({title}) => {
    return (
        <div className="page-title">
            <div className="container">
                <h2 className="page-title-head">{title}</h2>
            </div>
        </div>
    )
}
