import { THEME } from "common";
import { StyleSheet, TextStyle } from "react-native";

export const PRIMARY_TYPE = "primary";
export const SECONDARY_TYPE = "secondary";

export const DEFAULT_TYPE = PRIMARY_TYPE;

export interface TYPES {
    [property: string]: typeof PRIMARY_TYPE | typeof SECONDARY_TYPE
};

export interface ITextStyle {
    fontSize?: number,
    color?: string,
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined,
};

export interface IContainerStyle {
    alignSelf?: "center" | "auto" | "flex-start" | "flex-end" | "stretch" | "baseline" | undefined,
    flex?: number,
    minHeight?: number,
};

export interface ISTitleStyle {
    [PRIMARY_TYPE]: ITextStyle,
    [SECONDARY_TYPE]: ITextStyle
};

export interface ISContainerStyle {
    [PRIMARY_TYPE]: IContainerStyle,
    [SECONDARY_TYPE]: IContainerStyle
}

export const NATIVE_COLOR_BLACK = 4278190080;
export const NATIVE_COLOR_WHITE = 4294967295;

export const sContainerStyle: ISContainerStyle = StyleSheet.create({
    [PRIMARY_TYPE]: {
        alignSelf: 'center',
        flex: 1,
        minHeight: 56,
        padding: 12,
        borderRadius: 8,
    },
    [SECONDARY_TYPE]: {
        alignSelf: 'center',
        flex: 1,
        minHeight: 56,
        padding: 12,
        borderRadius: 8,
    }
})

export const sTitleStyle: ISTitleStyle = StyleSheet.create({
    [PRIMARY_TYPE]: {
        fontSize: 16,
        fontWeight: "400",
    },
    [SECONDARY_TYPE]: {
        fontSize: 16,
        fontWeight: "400",
    },
});

export const sThemeStyle = StyleSheet.create({
    [THEME.LIGHT]: {
        color: THEME.getThemedInputTextColor(THEME.LIGHT),
        backgroundColor: THEME.getThemedInputBackgroundColor(THEME.LIGHT),
    },
    [THEME.DARK]: {
        color: THEME.getThemedInputTextColor(THEME.DARK),
        backgroundColor: THEME.getThemedInputBackgroundColor(THEME.DARK),
    },
    [THEME.TEAL]: {
        color: THEME.getThemedInputTextColor(THEME.TEAL),
        backgroundColor: THEME.getThemedInputBackgroundColor(THEME.TEAL),
    }
})

