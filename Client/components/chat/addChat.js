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
import SearchableDropdown from 'react-native-searchable-dropdown';

const DATA = [
    {
        id: 1,
        name: 'English',
    },
    {
        id: 2,
        name: 'Polish',
    },
    {
        id: 3,
        name: 'German',
    },
    {
        id: 4,
        name: 'asd',
    },
    {
        id: 5,
        name: 'asd1',
    },
    {
        id: 6,
        name: 'asd2',
    },
];
const CHAT_COLOR = "#F9A826";

export default function AddChat() {

    const [checked, onChange] = useState(false);
    const navigation = useNavigation();

    var state = {
        selectedItems: [
            {
                id: 1,
                name: 'English',
            },
            {
                id: 2,
                name: 'Polish',
            }
        ]
    }

    var selected = {};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formView}>
                <View
                    style={[styles.row, { width: 300, justifyContent: "space-around" }]}
                >
                    <Text style={styles.title}>FIND CHAT</Text>
                </View>
                <SearchableDropdown
                    onItemSelect={(item) => {
                        selected = item;
                    }}
                    containerStyle={{ padding: 5, width: 300}}

                    itemStyle={{
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#fff',
                        borderColor: '#000',
                        borderBottomWidth: 1,
                        borderRadius: 5,
                    }}
                    itemTextStyle={{ color: '#222' }}
                    itemsContainerStyle={{ maxHeight: 140 }}
                    items={DATA}
                    selectedItems = {selected}
                    defaultIndex={2}
                    resetValue={false}
                    textInputProps={
                        {
                            placeholder: "Language",
                            underlineColorAndroid: "transparent",
                            style: {
                                padding: 12,
                                borderBottomWidth: 2,
                                borderColor: '#000',
                            },
                        }
                    }
                    listProps={
                        {
                            nestedScrollEnabled: true,
                        }
                    }
                />
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
        backgroundColor: CHAT_COLOR,
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
