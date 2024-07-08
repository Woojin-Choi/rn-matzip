import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthHomeScreen from "../../screens/AuthHomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import { authNavigations } from "../../constants";

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined; // study
  [authNavigations.LOGIN]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

/*
as const
[authNavigations.AUTH_HOME]
*/
