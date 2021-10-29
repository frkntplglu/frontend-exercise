import React, {FC} from 'react'
import "./card.scss"

interface ICardProps{
    image: string;
    title: string;
    releaseYear: number;
}

export const Card: FC<ICardProps> = ({image, title, releaseYear}) => {
    return (
        <div className="card">
            <div className="card-image"><img src={image} alt={title} /></div>
            <div className="card-title">{title} - {releaseYear}</div>
        </div>
    )
}
