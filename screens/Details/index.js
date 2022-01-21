import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import VideoPlayer from "./components/VideoPlayer";
import Description from "./components/Description";
import Cast from "./components/Cast";
export default function Details({ navigation, route }) {
  console.log(route.params.item);
  const item = route.params.item;
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fff" }}>
        <VideoPlayer cover={item.cover} navigation={navigation} />
        <Description item={item} />
        <Cast />
      </View>
    </ScrollView>
  );
}
