import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import FlashcardSVG from "../../assets/flashcard.svg";

export default function Set(props) {
  const navigation = useNavigation();
  const LEARN_COLOR = "#00B0FF";
  return (
    <Pressable
      style={styles.actionWithDescripion}
      onPress={() => navigation.navigate("exercise")}
    >
      <View style={[styles.action, { borderColor: LEARN_COLOR}]}>
        <FlashcardSVG width="133" height="96"></FlashcardSVG>
      </View>
      <Text style={[styles.description, { color: LEARN_COLOR}]}>
        {props.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  actionWithDescripion: {
    alignItems: "center",
  },
  description: {
    fontSize: 18,
    marginTop: 7,
  },
  action: {
    width: 156,
    height: 133,
    borderWidth: 3,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
