import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faUserGraduate,
  faShareAlt,
  faComments,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QuickActions from "../quick-actions/quickActions";
import Auth from "../auth/auth";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
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
        component={Auth}
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
        component={QuickActions}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faChartBar} color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
