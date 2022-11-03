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

const Tab = createBottomTabNavigator();

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
        component={QuickActions}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faShareAlt} color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={QuickActions}
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
    </Tab.Navigator>
  );
}
