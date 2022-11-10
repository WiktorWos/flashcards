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
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Set from "./set";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d7",
        title: "Third Item",
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d",
        title: "Third Item",
    },
];

const SHARED_COLOR = "#EF233C";

const renderItem = ({ item }) => <Set name={item.title}></Set>;

export default function SharedSets() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>SHARED</Text>
            <View style={styles.row}>
                <View style={styles.searchRow}>
                    <FontAwesomeIcon icon={faSearch} size={25} />
                    <TextInput style={styles.inputStyle} secureTextEntry={false} />
                </View>
                <Pressable onPress={() => navigation.navigate("Search shared")}>
                    <FontAwesomeIcon icon={faPlus} size={25} />
                </Pressable>
            </View>
            <FlatList
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginBottom: 20,
                }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    actionWithDescripion: {
        alignItems: "center",
        color: SHARED_COLOR,
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
        borderColor: SHARED_COLOR,
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
});
