import { useTheme } from 'contexts/Theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IThemedViewProps {
    children: any
}

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


const ThemedView = ({children}: IThemedViewProps) => {
    const { theme } = useTheme();
    return (
        <View style={
            styles[theme]
        }>
            {children}
        </View>
    )
};

export default ThemedView