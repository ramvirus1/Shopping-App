import styled from "styled-components/native";
import SIcons from "../SIcons";
import SText from "../SText";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const SQuantityBox = ({ quantity, onQuantityUpdate }): JSX.Element => {
    return (
        <QuantityBoxContainer>
            {quantity ? 
                <>
                    <ActionContainer onPress={() => onQuantityUpdate(quantity - 1)}>
                        <SIcons name="remove" size={18}/>
                    </ActionContainer>
                    <SText text={quantity} weight="normal" size={14}/>
                    <ActionContainer onPress={() => onQuantityUpdate(quantity + 1)}>
                        <SIcons name="add" size={18}/>
                    </ActionContainer>
                </>:
                <ActionContainer onPress={() => onQuantityUpdate(1)}>
                    <SIcons name="add" size={18}/>
                </ActionContainer>
            }
        </QuantityBoxContainer>
    )
};

export default SQuantityBox;

const QuantityBoxContainer = styled.View`
    flex-direction: row;
    border: 1px solid #000;
    justify-content: space-between;
    border-radius: ${scale(5)}px;
    align-items: center;
`;

const ActionContainer = styled.TouchableOpacity`
    margin: ${scale(6)}px;

`;

const QuantityText = styled.Text`
    font-family: Inter_500Medium;
    font-size: ${scale(15)}px;
    color: black;
`