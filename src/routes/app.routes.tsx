import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Destination } from "../screens/Destination";
import { Crew } from "../screens/Crew";
import { Tecnology } from "../screens/Tecnology";
import { useTheme } from "styled-components";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.prymary,
          tabBarInactiveTintColor: "#A3A3A3",
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingVertical: Platform.OS === "ios" ? 20 : 0,
            height: 60,
          },
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        <Screen
          name="Destination"
          component={Destination}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="map-pin" size={24} color={color} />
            ),
          }}
        />
        <Screen
          name="Crew"
          component={Crew}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="users" size={24} color={color} />
            ),
          }}
        />
        <Screen
          name="Tecnology"
          component={Tecnology}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="cpu" size={24} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
