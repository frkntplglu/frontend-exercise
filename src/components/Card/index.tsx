import React, {FC} from 'react'
import "./card.scss"

interface ICardProps{
    image: string;
    title: string;
}

export const Card: FC<ICardProps> = React.memo(({image, title}) => {
    return (
        <div className="card">
            <div className="card-image"><img src={image} alt={title} /></div>
            <div className="card-title">{title}</div>
        </div>
    )
})
