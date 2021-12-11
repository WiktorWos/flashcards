import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";
import Drawer from "./drawer";
import { useNavigation } from "@react-navigation/native";

export default function Exercise() {
  const navigation = useNavigation();
  const flashcards = [
    {
      frontWord: "Front1",
      frontDesc: "Desc",
      backWord: "Back",
      backDesc: "Desc",
      drawer: 1,
    },
    {
      frontWord: "Front2",
      frontDesc: "Desc",
      backWord: "Back",
      backDesc: "Desc",
      drawer: 2,
    },
    {
      frontWord: "Front2asd",
      frontDesc: "Desc",
      backWord: "Back",
      backDesc: "Desc",
      drawer: 2,
    },
    {
      frontWord: "Front4",
      frontDesc: "Desc",
      backWord: "Back",
      backDesc: "Desc",
      drawer: 4,
    },
  ];

  const [isFront, setFront] = useState(true);
  const [flashcardsDone, setFlashcardsDone] = useState(0);
  const [flashcardsCorrect, setFlashcardsCorrect] = useState(0);
  const [currendDrawer, setCurrentDrawer] = useState(1);
  const currentFlashcards = flashcards.filter(
    (el) => el.drawer == currendDrawer
  );
  const sendCurrentNumToParent = (num) => {
    if (num != currendDrawer) {
      setCurrentDrawer(num);
      setCurrentIndex(0);
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  let renderedFlashcard;
  const renderCurrentFlashcard = () => {
    const currentFlashcard = currentFlashcards[currentIndex];
    renderedFlashcard = (
      <>
        <Text style={styles.word}>
          {isFront ? currentFlashcard.frontWord : currentFlashcard.backWord}
        </Text>
        <Text style={styles.description}>
          {isFront ? currentFlashcard.frontDesc : currentFlashcard.backDesc}
        </Text>
      </>
    );
  };

  const rememberOnClick = () => {
    setFlashcardsCorrect(flashcardsCorrect + 1);
    setFlashcardsDone(flashcardsDone + 1);
    if (currentIndex + 1 < currentFlashcards.length) {
      renderCurrentFlashcard();
      setCurrentIndex(currentIndex + 1);
    }
  };

  const forgetOnClick = () => {
    setFlashcardsDone(flashcardsDone + 1);
    if (currentIndex + 1 < currentFlashcards.length) {
      renderCurrentFlashcard();
      setCurrentIndex(currentIndex + 1);
    }
  };

  renderCurrentFlashcard();

  const close = () => {
    console.log(flashcardsDone);
    console.log(flashcardsCorrect);
    setFlashcardsCorrect(0);
    setFlashcardsDone(0);
    navigation.navigate("learn");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.row,
          { marginTop: 80, width: "100%", justifyContent: "space-around" },
        ]}
      >
        <Text style={styles.title}>ANIMALS</Text>
        <Pressable onPress={() => close()}>
          <FontAwesomeIcon icon={faTimes} size={30} />
        </Pressable>
      </View>
      <View style={styles.flashcard}>{renderedFlashcard}</View>
      <View style={styles.controlsContainer}>
        <View style={styles.row}>
          <Pressable onPress={() => rememberOnClick()}>
            <FontAwesomeIcon icon={faCheck} size={30} />
          </Pressable>
          <Pressable onPress={() => forgetOnClick()}>
            <FontAwesomeIcon icon={faTimes} size={30} />
          </Pressable>
          <Pressable onPress={() => setFront(!isFront)}>
            <FontAwesomeIcon icon={faUndo} size={30} />
          </Pressable>
        </View>
      </View>
      <View style={[{ marginTop: 150 }, styles.controlsContainer]}>
        <Drawer sendCurrentNumToParent={sendCurrentNumToParent}></Drawer>
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
