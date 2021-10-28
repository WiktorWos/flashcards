import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import Homepage from "../../assets/homepage.svg";
import { SVGHomepage, SvgUri, SvgXml } from "react-native-svg";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Homepage width={345} height={251} style={styles.homepageImg} />
      <Text style={styles.title}>LEARN </Text>
      <Text style={styles.title}>BETTER </Text>
      <Text style={styles.description}>
        Flashcards is a vocabulary learning app. We are using Leitner system
        which provides efficient learning process.
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Get started!</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#63A18F",
  },
  btnText: {
    fontSize: 22.5,
    lineHeight: 23,
    letterSpacing: 0.35,
    color: "white",
  },
  description: {
    fontSize: 22.5,
    marginTop: 5,
    marginBottom: 50,
  },
  logo: {
    marginTop: 15,
    marginBottom: 20,
  },
  homepageImg: {
    marginBottom: 20,
  },
});
