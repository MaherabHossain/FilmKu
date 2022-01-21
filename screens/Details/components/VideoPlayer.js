import React from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function VideoPlayer({ cover, navigation }) {
  //   console.log(route.params.item);
  return (
    <View>
      {/* video player */}
      <Image source={cover} style={Style.poster_image} />
      <View style={Style.top_icon}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: "85%" }}>
          <Entypo name="dots-three-horizontal" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={Style.play_icon}>
        {/* play icon */}
        <AntDesign name="play" size={35} color="#fff" />
        <Text style={Style.play_text}>Play Trailer</Text>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  poster_image: {
    height: 250,
    width: "100%",
  },
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
});
