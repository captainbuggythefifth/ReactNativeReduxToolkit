export const PersistenceKey = "ThemePersistenceKey";

export const LIGHT = "light";
export const DARK = "dark";

export const DEFAULT = LIGHT;

export interface TYPES {
    [property: string]: typeof LIGHT | typeof DARK
};

interface IThemedTextColor {
    [LIGHT]: {
        color: string
    },
    [DARK]: {
        color: string
    }
}

export const sThemedTextColor: IThemedTextColor = {
    [LIGHT]: {
        color: "black",
    },
    [DARK]: {
        color: "white",
    }
};

export const sThemedBackgroundColor: IThemedTextColor = {
    [LIGHT]: {
        color: "white",
    },
    [DARK]: {
        color: "black",
    }
}

export const getThemedTextColor = (theme: typeof LIGHT | typeof DARK): string => {
    return sThemedTextColor[theme].color
}

export const getThemedBackgroundColor = (theme: typeof LIGHT | typeof DARK): string => {
    return sThemedBackgroundColor[theme].color
}

export const nativeColors = {
    [LIGHT]: 4278190080, 
    [DARK]: 4294967295
}
