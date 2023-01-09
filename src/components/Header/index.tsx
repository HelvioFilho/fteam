import React from 'react';
import { BackButton, BackIcon, Container, Logo } from './styles';

import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  const { navigate } = useNavigation();

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={() => navigate('groups')}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />

    </Container>
  );
}