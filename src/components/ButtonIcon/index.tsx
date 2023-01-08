import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIconTypeStyleProps, Container, Icon } from './styles';
import { TouchableOpacityProps } from 'react-native';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = 'primary', ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon
        name={icon}
        type={type}
      />
    </Container>
  );
}