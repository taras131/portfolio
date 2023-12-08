export type TRating = 1 | 2 | 3 | 4 | 5;

export type TAuthor = {
    name: string,
    role: string,
    imgPath: string
}

export type TRecommendation = {
    id: number,
    rating: TRating,
    title: string,
    description: string,
    author: TAuthor
}