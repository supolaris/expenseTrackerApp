export function FormatedDate(date){
    return `${date.getFullYear()}-${date.getMonth() + 1 }-${date.getDate()}`;
}


export function getDateMiusDays(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}