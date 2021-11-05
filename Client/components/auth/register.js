import React, { useContext } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { AccountContext } from "./accountContext";

export default function Register() {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <View style={styles.formView}>
      <Text style={styles.title}>Create account</Text>
      <TextInput
        placeholder="Email"
        style={styles.inputStyle}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputStyle}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Repeat password"
        style={styles.inputStyle}
        secureTextEntry={true}
      />
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Sign up</Text>
      </Pressable>
      <Pressable style={styles.newUser} onPress={switchToSignin}>
        <Text>I'm aready a member. </Text>
        <Text style={styles.linkText}>Sign in!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 115,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#63A18F",
    marginTop: 40,
  },
  btnText: {
    fontSize: 22.5,
    lineHeight: 23,
    letterSpacing: 0.35,
    color: "white",
  },
  formView: {
    backgroundColor: "#EEEEEE",
    height: "100%",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    alignItems: "center",
  },
  inputStyle: {
    marginTop: 30,
    width: 300,
    height: 57,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "white",
    borderColor: "#63A18F",
    borderWidth: 2,
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
