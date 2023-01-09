import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from "./app.routes";

import { useTheme } from "styled-components/native";

export function Routes() {
  const { color } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: color.gray_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}