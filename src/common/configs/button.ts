import { THEME } from "common";
import { StyleSheet } from "react-native";

export const PRIMARY = "primary";
export const SECONDARY = "secondary";
export const ROUNDED = "rounded";
export const PLAIN = "plain";
export const ROUNDED_FACEBOOK = "rounded_facebook";
export const ROUNDED_GOOGLE = "rounded_google";
export const ROUNDED_ROYALBLUE = "rounded_royalblue";
export const ROUNDED_WHITE = "rounded_white"

export const DEFAULT = PRIMARY;

export interface TYPES {
    [property: string]: typeof PRIMARY | typeof SECONDARY
};

export interface IButtonStyle {
    backgroundColor?: string
};

export interface IContainerStyle {
    borderRadius?: number
};

export interface ITitleStyle {
    fontSize?: number,
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined,
    color?: string,
};

export interface ISContainerStyle {
    [ROUNDED]: IContainerStyle,
    [ROUNDED_FACEBOOK]: IContainerStyle,
    [ROUNDED_GOOGLE]: IContainerStyle,
    [ROUNDED_ROYALBLUE]: IContainerStyle,
    [ROUNDED_WHITE]: IContainerStyle
};

export interface ISButtonStyle {
    [ROUNDED]: IButtonStyle,
    [ROUNDED_FACEBOOK]: IButtonStyle,
    [ROUNDED_GOOGLE]: IButtonStyle,
    [ROUNDED_ROYALBLUE]: IButtonStyle,
    [ROUNDED_WHITE]: IButtonStyle
};

export interface ISTitleStyle {
    [ROUNDED]: ITitleStyle,
    [ROUNDED_FACEBOOK]: ITitleStyle,
    [ROUNDED_GOOGLE]: ITitleStyle,
    [ROUNDED_ROYALBLUE]: ITitleStyle,
    [ROUNDED_WHITE]: ITitleStyle
};

export const NATIVE_COLOR_BLACK = 4278190080;
export const NATIVE_COLOR_WHITE = 4294967295;

const sContainerStyleDefault = {
    borderRadius: 16,
}

export const sContainerStyle: ISContainerStyle = StyleSheet.create({
    [ROUNDED]: {
        ...sContainerStyleDefault
    },
    [ROUNDED_FACEBOOK]: {
        ...sContainerStyleDefault
    },
    [ROUNDED_GOOGLE]: {
        ...sContainerStyleDefault
    },
    [ROUNDED_ROYALBLUE]: {
        ...sContainerStyleDefault,
    },
    [ROUNDED_WHITE]: {
        ...sContainerStyleDefault
    }
});

const sTitleStyleDefault = {
    fontSize: 14,
    color: THEME.getThemedTextColor(THEME.DEFAULT),
}

export const sTitleStyle: ISTitleStyle = StyleSheet.create({
    [ROUNDED]: {
        ...sTitleStyleDefault,
        color: "white"
    },
    [ROUNDED_FACEBOOK]: {
        ...sTitleStyleDefault,
    },
    [ROUNDED_GOOGLE]: {
        ...sTitleStyleDefault,
    },
    [ROUNDED_GOOGLE]: {
        ...sTitleStyleDefault,
    },
    [ROUNDED_ROYALBLUE]: {
        ...sTitleStyleDefault,
    },
    [ROUNDED_WHITE]: {
        ...sTitleStyleDefault,
        color: "#3068ce"
    }
});


export const sButtonStyle: ISButtonStyle = StyleSheet.create({
    [ROUNDED]: {
        backgroundColor: "#3068ce",
        minHeight: 50
    },
    [ROUNDED_FACEBOOK]: {
        backgroundColor: "#3068ce"
    },
    [ROUNDED_GOOGLE]: {
        backgroundColor: "#ae534f"
    },
    [ROUNDED_ROYALBLUE]: {
        backgroundColor: "#3068ce",
        minHeight: 50
    },
    [ROUNDED_WHITE]: {
        backgroundColor: "white",
        minHeight: 50
    }
});

