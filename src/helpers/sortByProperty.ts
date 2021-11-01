import { Entry } from '@features/entry/entrySlice'
export const sortByProperty = (array: Entry[], propertyName: "releaseYear" | "title", sortType: "asc" | "desc") => {
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