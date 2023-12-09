export type TContactsItem = {
    id: number,
    name: string,
    value: string
}

export type TContact = {
    id: number,
    iconId: string,
    items: TContactsItem []
}