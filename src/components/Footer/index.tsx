import React,{FC} from 'react'

interface Props{
    name: string;
    age: number;
    status: "online" | "offline";
    sayHi: (name: string) => void
}

export const Footer:FC<Props> = ({name, age, status, sayHi}) => {
    return (
        <footer className="footer">
            
        </footer>
    )
}
