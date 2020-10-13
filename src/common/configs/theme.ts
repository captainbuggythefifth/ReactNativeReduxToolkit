export const PersistenceKey = "ThemePersistenceKey";

export const LIGHT = "light";
export const DARK = "dark";
export const TEAL = "teal";

export const DEFAULT = LIGHT;

export interface TYPES {
    [property: string]: typeof LIGHT | typeof DARK | typeof TEAL
};

interface IThemedTextColor {
    [LIGHT]: {
        color: string
    },
    [DARK]: {
        color: string
    },
    [TEAL]: {
        color: string
    }
}

interface IThemedInputTextColor {
    [LIGHT]: {
        color: string
    },
    [DARK]: {
        color: string
    },
    [TEAL]: {
        color: string
    }
}

interface IThemedInputBackgroundColor {
    [LIGHT]: {
        backgroundColor: string
    },
    [DARK]: {
        backgroundColor: string
    },
    [TEAL]: {
        backgroundColor: string
    }
}

interface IThemedBackgroundColor {
    [LIGHT]: {
        backgroundColor: string
    },
    [DARK]: {
        backgroundColor: string
    },
    [TEAL]: {
        backgroundColor: string
    }
}

export const sThemedTextColor: IThemedTextColor = {
    [LIGHT]: {
        color: "black",
    },
    [DARK]: {
        color: "white",
    },
    [TEAL]: {
        color: "white",
    }
};

export const sThemedBackgroundColor: IThemedBackgroundColor = {
    [LIGHT]: {
        backgroundColor: "white",
    },
    [DARK]: {
        backgroundColor: "black",
    },
    [TEAL]: {
        backgroundColor: "#4ebdad",
    }
}

export const sThemedInputTextColor: IThemedInputTextColor = {
    [LIGHT]: {
        color: "black",
    },
    [DARK]: {
        color: "white",
    },
    [TEAL]: {
        color: "black",
    }
}

export const sThemedInputBackgroundColor: IThemedInputBackgroundColor = {
    [LIGHT]: {
        backgroundColor: "white",
    },
    [DARK]: {
        backgroundColor: "black",
    },
    [TEAL]: {
        backgroundColor: "white",
    }
}

export const getThemedTextColor = (theme: typeof LIGHT | typeof DARK | typeof TEAL): string => {
    return sThemedTextColor[theme].color
}

export const getThemedBackgroundColor = (theme: typeof LIGHT | typeof DARK | typeof TEAL): string => {
    return sThemedBackgroundColor[theme].backgroundColor
}

export const getThemedInputTextColor = (theme: typeof LIGHT | typeof DARK | typeof TEAL): string => {
    return sThemedInputTextColor[theme].color
}

export const getThemedInputBackgroundColor = (theme: typeof LIGHT | typeof DARK | typeof TEAL): string => {
    return sThemedInputBackgroundColor[theme].backgroundColor
}

export const nativeTextColor = {
    [LIGHT]: 4278190080, 
    [DARK]: 4294967295,
    [TEAL]: 4294967295
}
