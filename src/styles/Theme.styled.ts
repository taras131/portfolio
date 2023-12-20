export const theme = {
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

export const darkTheme = {
    ...theme, colors: {
        ...theme.colors, textPrimary: "#FFFFFF",
        textSecondary: "#F0F0F6",
        backgroundPrimary: "#767676",
        backgroundSecondary: "#2B2B2B"
    }
}