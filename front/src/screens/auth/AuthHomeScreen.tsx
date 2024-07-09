import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigations/stack/AuthStackNavigator";
import { authNavigations } from "../../constants/navigations";
import CustomButton from "../../components/CustomButton";

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

export default function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  console.log("screen", Dimensions.get("screen").height);
  console.log("window", Dimensions.get("window").height);
  return (
    <SafeAreaView>
      <View>
        <CustomButton
          label="로그인 화면으로 이동"
          // variant="filled"
          onPress={() => {
            navigation.navigate(authNavigations.LOGIN);
          }}
        />
        <CustomButton
          label="회원가입 화면으로 이동"
          variant="outlined"
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
- typeof authNavigations.AUTH_HOME 이거랑 'AuthHome'이 왜 똑같은거지? typeof는 출력해보면 string 나오는데?
- 안드로이드는 상태표시줄을 포함하여 screen 값 가진다고.
*/
