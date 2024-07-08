import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigations/stack/AuthStackNavigator";
import { authNavigations } from "../../constants";

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

export default function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => {
            navigation.navigate(authNavigations.LOGIN);
          }}
        />
        <Button
          title="회원가입 화면으로 이동"
          onPress={() => {
            navigation.navigate(authNavigations.SIGNUP);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

/*
typeof authNavigations.AUTH_HOME 이거랑 'AuthHome'이 왜 똑같은거지? typeof는 출력해보면 string 나오는데?
*/
