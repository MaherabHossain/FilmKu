import React from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Description({ item }) {
  //   console.log(route.params.item);
  return (
    <View>
      <View style={Style.container}>
        <View style={Style.title_row}>
          <Text style={Style.title}>{item.title}</Text>
          <Feather
            name="bookmark"
            size={24}
            color="black"
            style={{ paddingRight: 20 }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingLeft: 20, paddingTop: 10 }}>
        <Entypo name="star" size={15} color="gold" />
        <Text style={{ color: "#a3a199" }}>9.8/10 IMDb</Text>
      </View>
      <View style={{ flexDirection: "row", paddingLeft: 20 }}>
        {/* tag or category */}
        <View style={Style.category}>
          <Text style={Style.category_text}>HOROR</Text>
        </View>
        <View style={Style.category}>
          <Text style={Style.category_text}>THRILLER</Text>
        </View>
        <View style={Style.category}>
          <Text style={Style.category_text}>ACTION</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 20,
          paddingTop: 10,
          paddingRight: 20,
          justifyContent: "space-between",
        }}
      >
        {/* length */}
        <View>
          <Text style={Style.size_title}>Length</Text>
          <Text style={{ color: "#000", fontSize: 18 }}>2h 28min</Text>
        </View>
        <View>
          <Text style={Style.size_title}>Language</Text>
          <Text style={Style.size_val}>English</Text>
        </View>
        <View>
          <Text style={Style.size_title}>Rating</Text>
          <Text style={Style.size_val}>PG-13</Text>
        </View>
        <View></View>
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
        {/* description */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            width: "50%",
            color: "#000",
          }}
        >
          Description
        </Text>
        <Text style={{ color: "#a3a199" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    width: "50%",
    color: "#000",
  },
  poster_image: {
    height: 250,
    width: "100%",
  },
  size_title: { color: "#a3a199", fontSize: 18 },
  size_val: { color: "#000", fontSize: 18 },
  top_icon: {
    flexDirection: "row",
    position: "absolute",
    padding: 40,
  },
  play_text: {
    color: "#fff",
    marginLeft: -20,
    fontSize: 19,
    marginTop: 5,
  },
  play_icon: {
    marginTop: "35%",
    position: "absolute",
    marginLeft: "45%",
  },
  category: {
    backgroundColor: "#8bb7cc",
    borderRadius: 10,
    margin: 5,
  },
  category_text: {
    color: "#0093d9",
    padding: 5,
  },
  title_row: {
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
