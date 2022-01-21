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
export default function PopularCard({ item, navigation }) {
  console.log(item.poster);
  const navigate = () => {
    navigation.navigate("Details", { item });
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigate();
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={item.poster} style={Style.poster_image} />
        <View style={{ paddingLeft: 8 }}>
          <Text style={Style.title}>{item.title}</Text>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Entypo name="star" size={15} color="gold" />
            <Text style={{ color: "#a3a199" }}>{item.rating_one}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
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
          <View style={{ flexDirection: "row", padding: 5 }}>
            <Entypo name="clock" size={16} color="black" />
            <Text style={{ paddingLeft: 5 }}>{item.length}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const Style = StyleSheet.create({
  poster_image: {
    height: 120,
    width: 100,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  category: {
    backgroundColor: "#8bb7cc",
    borderRadius: 10,
    margin: 5,
  },
  category_text: {
    color: "#0093d9",
    padding: 3,
  },
});
