import Ionicons from '@expo/vector-icons/Ionicons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const SIcons = ({ 
    name, 
    size, 
    color = "black"
}): JSX.Element => {
    return <Ionicons name={name} size={scale(size)} color={color} />
};

export default SIcons;