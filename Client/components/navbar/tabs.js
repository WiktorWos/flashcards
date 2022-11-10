import React from "react";
import { Text } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faUserGraduate,
  faShareAlt,
  faComments,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import QuickActions from "../quick-actions/quickActions";
import Auth from "../auth/auth";
import FlashcardSets from "../sets/sets";
import AddSet from "../sets/addSet";
import Exercise from "../exercise/exercise";
import Home from "../home/home";
import Stats from "../stats/stats";
import SingleChat from "../chat/chat";
import ChatList from "../chat/chatList";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AddChat from "../chat/addChat";
import SharedSets from "../sets/sharedSets";
import SearchShared from "../sets/searchForShared";

const Tab = createBottomTabNavigator();
const ChatStack = createNativeStackNavigator();

function ChatStackScreen() {
    return (<ChatStack.Navigator>
        <ChatStack.Screen name="Chats" component={ChatList} />
        <ChatStack.Screen name="Chat" component={SingleChat} />
        <ChatStack.Screen name="Search chat" component={AddChat} />
    </ChatStack.Navigator>);
}

function SharedStackScreen() {
    return (<ChatStack.Navigator>
        <ChatStack.Screen name="Shared" component={SharedSets} />
        <ChatStack.Screen name="Search shared" component={SearchShared} />
    </ChatStack.Navigator>);
}

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="start"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="home"
        component={QuickActions}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="learn"
        component={FlashcardSets}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUserGraduate} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="shared"
        component={SharedStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faShareAlt} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="chat screen"
        component={ChatStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faComments} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="stats"
        component={Stats}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faChartBar} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="add set"
        component={AddSet}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="auth"
        component={Auth}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="start"
        component={Home}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: "none",
          },
        }}
        />
        {/*<Tab.Screen*/}
        {/*    name="add chat"*/}
        {/*    component={AddChat}*/}
        {/*    options={{*/}
        {/*        tabBarButton: () => null,*/}
        {/*        tabBarStyle: {*/}
        {/*            display: "none",*/}
        {/*        },*/}
        {/*    }}*/}
        {/*/>*/}
    </Tab.Navigator>
  );
}
