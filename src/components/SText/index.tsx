import styled from "styled-components/native";
import { ISText, IText } from "./types";
import { scale } from "react-native-size-matters";

const weightMapping: {[key: string]: string} = {
    bold: " Inter_700Bold",
    semibold: "Inter_600SemiBold",
    normal: "Inter_400Regular"
};

const SText = ({ 
    text,
    weight = "normal",
    size = 10
}: ISText): JSX.Element => {
    return <Text numberOfLines={2} weight={weightMapping[weight]} size={size}>{text}</Text>
};

export default SText;

const Text = styled.Text<IText>`
    font-family: ${p => p.weight};
    font-size: ${p => scale(p.size)}px;
`