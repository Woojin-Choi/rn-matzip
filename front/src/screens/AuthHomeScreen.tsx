import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AuthHomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => {
            navigation.navigate("LogIn");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
