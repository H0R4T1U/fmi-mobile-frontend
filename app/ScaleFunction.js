import {Dimensions} from "react-native";

const { width, height } = Dimensions.get('window');

export const scale = (size) => {
    const guidelineBaseWidth = 411;
    const scaleFactor = width / guidelineBaseWidth;
    const normalizedSize = size * scaleFactor;
    return Math.round(normalizedSize);
};