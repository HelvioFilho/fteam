import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    font-size: ${theme.size.md}px;
    color: ${theme.color.white};
    background-color: ${theme.color.gray_700};
  `};
`;