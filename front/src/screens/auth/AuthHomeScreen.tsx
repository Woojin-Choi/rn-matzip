import {
  Button,
  Dimensions,
  Image,
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
import { ScrollView } from "react-native-gesture-handler";

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

export default function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/matzip.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: "center",
  },
  imageContainer: {
    flex: 2,
    width: Dimensions.get("screen").width / 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
    width: "100%",
  },
});

/*
- typeof authNavigations.AUTH_HOME 이거랑 'AuthHome'이 왜 똑같은거지? typeof는 출력해보면 string 나오는데?
- 안드로이드는 상태표시줄을 포함하여 screen 값 가진다고.
*/
