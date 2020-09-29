import React from "react";
import { StyleSheet, View } from "react-native";
import Counter from "components/molecules/Counter";
import SwitchTheme from "components/molecules/SwitchTheme";
import { useTheme } from "contexts/Theme";
import LanguagePicker from "components/molecules/LanguagePicker";



const MainApp = () => {
    const { theme } = useTheme();
    return (
        <View style={
            styles[theme]
        }>
            <Counter />
            <SwitchTheme />
            <LanguagePicker />
        </View>
    )
};

const commonStyle = {
    height: "100%"
}

const styles = StyleSheet.create({
    light: {
        backgroundColor: "white",
        ...commonStyle
    },
    dark: {
        backgroundColor: "black",
        ...commonStyle
    }
});

export default MainApp