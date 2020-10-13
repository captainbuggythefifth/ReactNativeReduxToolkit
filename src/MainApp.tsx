import React from "react";
import 'react-native-gesture-handler';
import { useTheme } from "contexts/Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "common";
import Counter from "components/molecules/Counter";
import SwitchTheme from "components/molecules/SwitchTheme";
import LanguagePicker from "components/molecules/LanguagePicker";
import ThemedInput from "components/molecules/ThemedInput";
import ThemedView from "components/molecules/ThemedView";

const MainApp = () => {
    const { theme } = useTheme();

    const isLoggedIn = false;
    return (
        <SafeAreaView style={{
            backgroundColor: THEME.getThemedBackgroundColor(theme),
            height: "100%",
            flex: 1
        }}>
            <ThemedView >
                <Counter />
                <SwitchTheme />
                <LanguagePicker />
                <ThemedInput />
            </ThemedView>

        </SafeAreaView>
    )
};

export default MainApp