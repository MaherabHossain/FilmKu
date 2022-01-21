import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function Header() {
  return (
    <View style={{ padding: 20, marginTop: 3 }}>
      <View style={{ flexDirection: "row" }}>
        <View>
          {/* menu icon */}
          <TouchableOpacity>
            <Entypo name="menu" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            width: "80%",
          }}
        >
          {/* menu text */}
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
          >
            FilmKu
          </Text>
        </View>
        <View>
          {/* notification icon */}
          <TouchableOpacity>
            <Ionicons
              name="ios-notifications-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
