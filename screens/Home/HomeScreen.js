import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import PopularCard from "./components/PopularCard";
import NowShowingCard from "./components/NowShowingCard";

const Movie = [
  {
    id: 1,
    title: "No Way Home",
    rating_one: "9.1/10 IMDb",
    length: "2h 28min",
    language: "English",
    rating_two: "PG-13",
    poster: require("../../assets/now_showing/no-way-home.jpg"),
    cover: require("../../assets/now_showing/no-way-home-cover.jpg"),
    popular: false,
  },
  {
    id: 2,
    title: "Eternals",
    rating_one: "8.1/10 IMDb",
    length: "2h 50min",
    language: "English",
    rating_two: "PG-15",
    poster: require("../../assets/now_showing/eternals.jpeg"),
    cover: require("../../assets/now_showing/eternals-cover.jpg"),
    popular: false,
  },
  {
    id: 3,
    title: "Amazing Spider Man",
    rating_one: "9.1/10 IMDb",
    length: "2h 28min",
    language: "English",
    rating_two: "PG-13",
    poster: require("../../assets/now_showing/amazing-spider-man.jpg"),
    cover: require("../../assets/now_showing/eternals-cover.jpg"),
    popular: false,
  },
  {
    id: 5,
    title: "Eternals",
    rating_one: "8.1/10 IMDb",
    length: "2h 50min",
    language: "English",
    rating_two: "PG-15",
    poster: require("../../assets/now_showing/eternals.jpeg"),
    cover: require("../../assets/now_showing/eternals-cover.jpg"),
    popular: true,
  },
  {
    id: 6,
    title: "Amazing Spider Man",
    rating_one: "9.1/10 IMDb",
    length: "2h 28min",
    language: "English",
    rating_two: "PG-13",
    poster: require("../../assets/now_showing/amazing-spider-man.jpg"),
    cover: require("../../assets/now_showing/eternals-cover.jpg"),
    popular: true,
  },
  {
    id: 4,
    title: "No Way Home",
    rating_one: "9.1/10 IMDb",
    length: "2h 28min",
    language: "English",
    rating_two: "PG-13",
    poster: require("../../assets/now_showing/no-way-home.jpg"),
    cover: require("../../assets/now_showing/no-way-home-cover.jpg"),
    popular: true,
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Header />
      <ScrollView>
        <View style={{ padding: 20 }}>
          {/* now showing section */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Now Showing
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#a3a199",
                borderRadius: 20,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#a3a199",
                    padding: 4,
                  }}
                >
                  See more
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Movie}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              item.popular ? (
                false
              ) : (
                <NowShowingCard item={item} navigation={navigation} />
              )
            }
          />
        </View>
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          {/* popular section */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Popular</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#a3a199",
                borderRadius: 20,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#a3a199",
                    padding: 4,
                  }}
                >
                  See more
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={Movie}
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 100 }}
            renderItem={({ item }) =>
              item.popular ? (
                <PopularCard item={item} navigation={navigation} />
              ) : (
                false
              )
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}
