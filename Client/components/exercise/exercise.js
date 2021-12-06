import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import FlashcardSVG from "../../assets/flashcard.svg";
import Checkbox from "../ui-elements/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheck,
  faCross,
  faTimes,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "./drawer";

export default function Exercise() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ANIMALS</Text>
      <View style={styles.flashcard}>
        <Text style={styles.word}>Word</Text>
        <Text style={styles.description}>Longer definition of the word</Text>
      </View>
      <View style={styles.controlsContainer}>
        <View style={styles.row}>
          <FontAwesomeIcon icon={faCheck} size={30} />
          <FontAwesomeIcon icon={faTimes} size={30} />
          <FontAwesomeIcon icon={faUndo} size={30} />
        </View>
      </View>
      <View style={[{ marginTop: 150 }, styles.controlsContainer]}>
        <Drawer currentNum={2}></Drawer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  controlsContainer: {
    alignItems: "center",
  },
  word: {
    fontSize: 22,
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
  },
  flashcard: {
    padding: 40,
    borderWidth: 3,
    borderColor: "#00B0FF",
    borderRadius: 15,
    alignItems: "center",
    maxHeight: 250,
  },
  checkboxText: {
    fontSize: 18,
    marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: 50,
  },
  container: {
    marginHorizontal: 30,
  },
  alreadyMemberContainer: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    marginTop: 80,
    marginBottom: 120,
    fontSize: 50,
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 115,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#00B0FF",
    marginTop: 40,
  },
  btnText: {
    fontSize: 22.5,
    lineHeight: 23,
    letterSpacing: 0.35,
    color: "white",
  },
  formView: {
    height: "100%",
    alignItems: "flex-start",
    marginRight: 40,
    marginLeft: 40,
  },
  inputStyle: {
    marginTop: 30,
    width: 260,
    height: 57,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderBottomWidth: 2,
  },
  passwordContainter: {
    alignItems: "flex-end",
  },
  forgotPassword: {
    marginTop: 5,
  },
  linkText: {
    color: "#63A18F",
  },
  newUser: {
    flexDirection: "row",
    marginTop: 20,
  },
});
