import styled, {css} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'primary' | 'secondary';

type ButtonStyleProps = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({theme, type}) => type === 'primary' ? theme.color.green_700 : theme.color.red_dark};
  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.size.md}px;
    color: ${theme.color.white};
  `};
`;