import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.size.xl}px;
    color: ${theme.color.white};
  `};
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({theme}) => css`
    font-family: ${theme.font.regular};
    font-size: ${theme.size.md}px;
    color: ${theme.color.gray_300};
  `};
`;