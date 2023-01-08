import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`;

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    font-size: ${theme.size.sm}px;
    color: ${theme.color.gray_300};
  `};
`;