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
import {
  faCheck,
  faCross,
  faTimes,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";

export default function Drawer({ sendCurrentNumToParent }) {
  var rows = [];
  var current = false;
  const [currentNum, setCurrentNum] = useState(1);
  const onDrawerClick = (i) => {
    setCurrentNum(i);
    sendCurrentNumToParent(i);
  };
  for (let i = 1; i < 6; i++) {
    current = currentNum == i;
    rows.push(
      <Pressable key={i} onPress={() => onDrawerClick(i)}>
        <Text style={[{ fontSize: 18 }, current && styles.current]}>{i}</Text>
      </Pressable>
    );
  }

  return <View style={styles.drawer}>{rows}</View>;
}
const styles = StyleSheet.create({
  current: {
    color: "#00B0FF",
  },
  drawer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 7,
  },
});
