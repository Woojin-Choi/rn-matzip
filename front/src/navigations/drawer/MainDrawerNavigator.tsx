import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MapHomeScreen from "../../screens/map/MapHomeScreen";
import FeedHomeScreen from "../../screens/feed/FeedHomeScreen";
import CalendarHomeScreen from "../../screens/calendar/CalendarHomeScreen";

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendalHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
