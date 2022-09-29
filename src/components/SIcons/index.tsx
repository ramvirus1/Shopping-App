import { memo } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ISIcons } from "./types"
import { scale } from 'react-native-size-matters';

const SIcons = ({ 
    name, 
    size, 
    color = "black"
}: ISIcons): JSX.Element => {
    return <Ionicons name={name} size={scale(size)} color={color} />
};

export default memo(SIcons);