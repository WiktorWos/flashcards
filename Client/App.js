import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./components/auth/auth";
import QuickActions from "./components/quick-actions/quickActions";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Tabs from "./components/navbar/tabs";
import FlashcardSets from "./components/sets/sets";
import Set from "./components/sets/set";
import AddSet from "./components/sets/addSet";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  return (
    // <NavigationContainer theme={myTheme}>
    //   <Tabs />
    // </NavigationContainer>
    <AddSet></AddSet>
  );
}
