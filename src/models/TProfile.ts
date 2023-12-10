import myPhoto from "../assets/images/my_photo.png";

export type TProgress = {
    id: number, name: string, percent: number
}

export type TSkills = {
    title: string,
    progress: TProgress []
}

export type TExtraSkills = string []

export type TParameter = {
    id: number
    name: string,
    value: string
}

export type TProfileMain = {
    myPhotoPath: string,
    name: string,
    role: string,
    social: string [],
}

export type TProfile = {
    main: TProfileMain
    parameters: TParameter []
    languages: TSkills,
    skills: TSkills,
    extraSkills: TExtraSkills,
}