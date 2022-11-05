import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

export default function AddSet() {
  const [checked, onChange] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FlashcardSVG width={250} height={150} style={{ marginTop: 40 }} />
      <View style={styles.formView}>
        <View
          style={[styles.row, { width: 300, justifyContent: "space-around" }]}
        >
          <Text style={styles.title}>ADD SET</Text>
          <Pressable onPress={() => navigation.navigate("learn")}>
            <FontAwesomeIcon icon={faTimes} size={30} />
          </Pressable>
        </View>
        <TextInput
          placeholder="Title"
          style={styles.inputStyle}
          secureTextEntry={false}
        />
        <TextInput
          placeholder="First language"
          style={styles.inputStyle}
          secureTextEntry={false}
        />
        <TextInput
          placeholder="Second language"
          style={styles.inputStyle}
          secureTextEntry={false}
        />
        <View style={styles.row}>
          <Checkbox checked={checked} onChange={onChange} />
          <Text style={styles.checkboxText}>Public</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Add set</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkboxText: {
    fontSize: 18,
    marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
  },
  container: {
    alignItems: "center",
  },
  alreadyMemberContainer: {
    width: "100%",
    alignItems: "center",
  },
  title: {
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
