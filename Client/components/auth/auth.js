import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import LoginSVG from "../../assets/loginSVG.svg";
import { Dimensions } from "react-native";
import Login from "./login";
import Register from "./register";
import { AccountContext } from "./accountContext";
import { useRoute } from "@react-navigation/native";

export default function Auth() {
  const route = useRoute();
  const windowWidth = Dimensions.get("window").width;
  const [active, setActive] = useState("signin");
  const switchToSignup = () => {
    setActive("signup");
  };

  const switchToSignin = () => {
    setActive("signin");
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <SafeAreaView style={styles.container}>
        <LoginSVG width={windowWidth} height={250} style={styles.loginSVG} />
        {active === "signin" && <Login />}
        {active === "signup" && <Register />}
      </SafeAreaView>
    </AccountContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loginSVG: {
    marginTop: 30,
  },
});
