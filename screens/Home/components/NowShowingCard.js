import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function NowShowingCard({ item, navigation }) {
  const navigate = () => {
    navigation.navigate("Details", { item });
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigate();
        }}
      >
        <Image source={item.poster} style={Style.poster_image} />
        <Text style={Style.title}>{item.title}</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <Entypo name="star" size={15} color="gold" />
        <Text style={{ color: "#a3a199" }}>{item.rating_one}</Text>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  poster_image: {
    height: 200,
    width: 140,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
