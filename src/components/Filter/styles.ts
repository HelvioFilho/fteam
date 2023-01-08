import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  width: 70px;
  height: 38px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 12px;
  ${({theme, isActive}) => isActive && css`
    border: 1px solid ${theme.color.green_700};
  `};
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({theme}) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.size.sm}px;
    color: ${theme.color.white};
  `};
`;