import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 16px;
  background-color: ${({theme}) => theme.color.gray_500};
`;

export const Name = styled.Text`
  flex: 1;

  ${({theme}) => css`
    font-family: ${theme.font.regular};
    font-size: ${theme.size.md}px;
    color: ${theme.color.gray_200};
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
  size: 24,
  color: theme.color.gray_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;