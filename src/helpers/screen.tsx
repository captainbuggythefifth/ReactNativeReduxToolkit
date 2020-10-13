import { Dimensions } from "react-native";

const { height } = Dimensions.get('window');

const getEquivalentHeight = (percentage: number) => {
    return height * (percentage / 100);
}

export {
    getEquivalentHeight
}