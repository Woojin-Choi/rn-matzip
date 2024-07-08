import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import AuthHomeScreen from "./src/screens/AuthHomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";

function App(): React.JSX.Element {
  const [name, setName] = useState("");

  const handleChangeInput = (text: string) => {
    console.log(text);
    setName(text);
  };

  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row", // default가 웹과 다르게 col임
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    height: 50,
    width: 100,
  },
});

export default App;

/*
- StyleSheet 꼭 써야 하나? 안 써도 변경 되는 것 같은데.
- 
*/
