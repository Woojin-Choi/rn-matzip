import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthHomeScreen from "../../screens/auth/AuthHomeScreen";
import LoginScreen from "../../screens/auth/LoginScreen";
import { authNavigations } from "../../constants/navigations";
import SignupScreen from "../../screens/auth/SignupScreen";

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined; // study
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // 공통의 옵션은 여기에서. 스크린 각각의 옵션은 각각 options 추가.
        cardStyle: {
          backgroundColor: "white",
        },
        headerStyle: { backgroundColor: "red", shadowColor: "gray" },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerTitle: "", // 헤더 텍스트를 제거
          headerShown: false, // 헤더 자체를 제거
        }}
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{
          headerTitle: "로그인",
        }}
      />
      <Stack.Screen
        name={authNavigations.SIGNUP}
        component={SignupScreen}
        options={{
          headerTitle: "회원가입",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

/*
as const
[authNavigations.AUTH_HOME]
*/
