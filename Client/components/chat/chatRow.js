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
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const CHAT_COLOR = "#F9A826";

export default function ChatRow(props) {
    const navigation = useNavigation();
    const cutMessage = props.lastMessage.slice(0,30);
    const seeMore =  props.lastMessage.length > 30 ? "..." : "";
    const previewText = cutMessage + seeMore;
    return <View style={styles.singleChat}>
        <Pressable
            style={styles.chatRow}
            onPress={() => navigation.navigate("Chat")}
        >
            <FontAwesomeIcon icon={faUser} size={40} style={styles.userIcon}/>
            <View>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.message}>{previewText }</Text>
            </View>
        </Pressable>

    </View>;
}

const styles = StyleSheet.create({
    chatRow: {
        flexDirection: "row",
        marginBottom: 10,
    },
    userIcon: {
        marginRight: 10
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
