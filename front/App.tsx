import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigations/root/RootNavigator";

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;

/*
- StyleSheet 꼭 써야 하나? 안 써도 변경 되는 것 같은데.
- 
*/
