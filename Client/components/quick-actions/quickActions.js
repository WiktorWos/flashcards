import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import LearnSVG from "../../assets/learn.svg";
import ChatSVG from "../../assets/chat.svg";
import SharedSVG from "../../assets/shared.svg";
import StatsSVG from "../../assets/stats.svg";

export default function QuickActions() {
  const LEARN_COLOR = "#00B0FF";
  const SHARED_COLOR = "#EF233C";
  const CHAT_COLOR = "#F9A826";
  const STATS_COLOR = "#6C63FF";
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>Hello!</Text>
      <Text style={styles.title}>QUICK ACTIONS</Text>
      <View style={styles.row}>
        <Pressable style={styles.actionWithDescripion}>
          <View style={[styles.action, { borderColor: LEARN_COLOR }]}>
            <LearnSVG width="133" height="96"></LearnSVG>
          </View>
          <Text style={[styles.description, { color: LEARN_COLOR }]}>
            Learn
          </Text>
        </Pressable>
        <Pressable style={styles.actionWithDescripion}>
          <View style={[styles.action, { borderColor: SHARED_COLOR }]}>
            <SharedSVG width="133" height="96"></SharedSVG>
          </View>
          <Text style={[styles.description, { color: SHARED_COLOR }]}>
            Shared sets
          </Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.actionWithDescripion}>
          <View style={[styles.action, { borderColor: CHAT_COLOR }]}>
            <ChatSVG width="133" height="96"></ChatSVG>
          </View>
          <Text style={[styles.description, { color: CHAT_COLOR }]}>Chat</Text>
        </Pressable>
        <Pressable style={styles.actionWithDescripion}>
          <View style={[styles.action, { borderColor: STATS_COLOR }]}>
            <StatsSVG width="133" height="96"></StatsSVG>
          </View>
          <Text style={[styles.description, { color: STATS_COLOR }]}>
            Stats
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actionWithDescripion: {
    alignItems: "center",
    color: "#00B0FF",
  },
  description: {
    fontSize: 18,
    marginTop: 7,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  hello: {
    marginTop: 25,
    fontSize: 20,
  },
  title: {
    marginTop: 25,
    marginBottom: 50,
    fontSize: 50,
    fontWeight: "bold",
  },
  container: {
    marginLeft: 30,
    marginRight: 30,
  },
  action: {
    width: 156,
    height: 133,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#00B0FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
