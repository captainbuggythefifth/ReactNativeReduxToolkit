import { THEME } from "common";
import { StyleSheet, TextStyle } from "react-native";

export const PRIMARY = "primary";
export const SECONDARY = "secondary";

export const DEFAULT = PRIMARY;

export interface TYPES {
    [property: string]: typeof PRIMARY | typeof SECONDARY
};

export interface ITextStyle extends Partial<TextStyle> {
    fontSize: number,
    fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined,
    padding: number,
    color: string
};

export interface ISTextStyle {
    [PRIMARY]: ITextStyle,
    [SECONDARY]: ITextStyle
};

export const NATIVE_COLOR_BLACK = 4278190080;
export const NATIVE_COLOR_WHITE = 4294967295;

export const sTextStyle: ISTextStyle = StyleSheet.create({
    [PRIMARY]: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 4,
        color: THEME.getThemedTextColor(THEME.DEFAULT)
    },
    [SECONDARY]: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 4,
        color: THEME.getThemedTextColor(THEME.DEFAULT)
    },
});

