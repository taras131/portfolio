export type TPlansAdvantage = {
    id: number
    name: string
}
export type TPlan = {
    id: number,
    isPopular: boolean,
    name: string,
    priceHourInDollars: string,
    description: string,
    advantagesIdList: number []
}