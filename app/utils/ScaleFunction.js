import {Dimensions} from "react-native";

const { width, height } = Dimensions.get('window');

export const scaleWidth = (size) => {
    const guidelineBaseWidth = 411;
    const scaleFactor = width / guidelineBaseWidth;
    const normalizedSize = size * scaleFactor;
    return Math.round(normalizedSize);
};

export const scaleHeight = (size) => {
    const guidelineBaseHeight = 890;
    const scaleFactor = height / guidelineBaseHeight;
    const normalizedSize = size * scaleFactor;
    return Math.round(normalizedSize);
}