import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.gray_700};
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.size.sm}px;
    color: ${theme.color.gray_200};
  `};
`;