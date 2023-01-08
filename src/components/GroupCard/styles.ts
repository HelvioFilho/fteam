import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray_500};
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    font-size: ${theme.size.md}px;
    color: ${theme.color.gray_200};
  `};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.color.green_700,
  weight: 'fill'
}))`
  margin-right: 20px;
`;