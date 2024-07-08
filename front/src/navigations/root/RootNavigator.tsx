import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthStackNavigator from "../stack/AuthStackNavigator";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator";

export default function RootNavigator() {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

const styles = StyleSheet.create({});
