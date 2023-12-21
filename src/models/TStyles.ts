export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}

export interface ITheme {
    colors : {
        accent: string,
        textPrimary: string,
        textSecondary: string,
        backgroundPrimary: string,
        backgroundSecondary: string,
    },
    media: {
        laptop: string,
        tablet: string,
        mobile: string,
    },
    sizes: {
        profileWidthPx: number,
        menuWidthPx: number
    }
}