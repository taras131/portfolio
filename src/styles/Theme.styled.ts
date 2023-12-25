import {DefaultTheme} from "styled-components";
import {ITheme, ThemeEnum} from "../models/TStyles";

// ITheme - используется для статичной темы
const baseTheme: ITheme = {
    colors: {
        accent: "#FFB400",
        textPrimary: "#2B2B2B",
        textSecondary: "#767676",
        backgroundPrimary: "#FFFFFF",
        backgroundSecondary: "#F0F0F6",
    },
    media: {
        laptop: "screen and (max-width: 990px)",
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)",
    },
    sizes: {
        profileWidthPx: 305,
        menuWidthPx: 108
    }
}

export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    colors: {...baseTheme.colors, backgroundSecondary: "#2B2B2B", backgroundPrimary: "#767676",
        textPrimary:  "#FFFFFF", textSecondary: "#F0F0F6"},
    type: ThemeEnum.dark,

}