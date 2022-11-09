import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    Pressable,
} from "react-native";
import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FlashcardSVG from "../../assets/flashcard.svg";
import Set from "../sets/set";
import ChatRow from "./chatRow";

const CHAT_COLOR = "#F9A826";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "John Doe",
        lastMessage: "siema byku co tam u ciebie siema byku co tam u ciebie siema byku co tam u ciebie siema byku co tam u ciebie siema byku co tam u ciebie siema byku co tam u ciebie"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b",
        name: "John Doe",
        lastMessage: "siema byku co tam u ciebie"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28",
        name: "John Doe",
        lastMessage: "siema byku co tam u ciebie"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2",
        name: "John Doe",
        lastMessage: "siema byku co tam u ciebie"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb",
        name: "John Doe",
        lastMessage: "siema byku co tam u ciebie"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53ab",
        name: "John Doe",
        lastMessage: "siema byku co tam u ciebie"
    },
];

const renderItem = ({ item}) => <ChatRow name={item.name} lastMessage={item.lastMessage}/>


export default function ChatList() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>CHATS</Text>
            <View style={styles.row}>
                <View style={styles.searchRow}>
                    <FontAwesomeIcon icon={faSearch} size={25} />
                    <TextInput style={styles.inputStyle} secureTextEntry={false} />
                </View>
                <Pressable onPress={() => navigation.navigate("Search chat")}>
                    <FontAwesomeIcon icon={faPlus} size={25} />
                </Pressable>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
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
    chatRow: {
        flexDirection: "row",
        marginBottom: 10,
    },
    userIcon: {
        marginRight: 10
    },
    hello: {
        marginTop: 25,
        fontSize: 20,
    },
    title: {
        marginTop: 25,
        fontSize: 50,
        fontWeight: "bold",
    },
    container: {
        flex: 1,
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
    inputStyle: {
        marginBottom: 20,
        width: 150,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderBottomWidth: 2,
    },
    searchRow: {
        flexDirection: "row",
    },
    singleChat: {
        borderBottomWidth: 2,
        borderColor: CHAT_COLOR,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    message: {

    }
});
