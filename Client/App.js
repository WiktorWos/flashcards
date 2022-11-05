import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./components/auth/auth";
import QuickActions from "./components/quick-actions/quickActions";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Tabs from "./components/navbar/tabs";
import FlashcardSets from "./components/sets/sets";
import Set from "./components/sets/set";
import AddSet from "./components/sets/addSet";
import Exercise from "./components/exercise/exercise";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/home/home";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  //   const [isSignedIn, setSignedIn] = useState(false);
  return (
    <NavigationContainer theme={myTheme}>
      <Tabs />
    </NavigationContainer>
  );
}
