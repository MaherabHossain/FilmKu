import * as React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import History from "../History";
import Bookmark from "../Bookmark";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused
              ? "dribbble-with-circle"
              : "dribbble-with-circle";
          } else if (route.name === "History") {
            iconName = focused ? "document" : "document";
          } else if (route.name === "Bookmark") {
            iconName = focused ? "bookmark" : "bookmark";
          }
          return <Entypo name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#3246a8",
        tabBarInactiveTintColor: "gray",
        tabBarLabel: () => {
          return null;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
    </Tab.Navigator>
  );
}
