import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
export default function Cast() {
  return (
    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
      {/* cast */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          width: "50%",
          color: "#000",
        }}
      >
        Cast
      </Text>
      <View style={{ flexDirection: "row", marginLeft: -10 }}>
        {/* cast card */}
        <CastCard
          name="Tom Holland"
          url="https://pbs.twimg.com/profile_images/1460685303790940165/foxD81_0_400x400.jpg"
        />
        <CastCard
          name="Zendaya"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/1200px-Zendaya_-_2019_by_Glenn_Francis.jpg"
        />
        <CastCard
          name="Benedict Cumberbatch"
          url="https://cdn-www.comingsoon.net/assets/uploads/2021/10/cumberbatch.jpg"
        />
        <CastCard
          name="Jacob Batalon"
          url="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/68/Jacob_Batalon.jpg"
        />
      </View>
    </View>
  );
}

const CastCard = ({ name, url }) => {
  return (
    <View style={{ width: 85 }}>
      <Image
        source={{
          uri: url,
        }}
        style={{ width: 80, height: 100, borderRadius: 10, margin: 3 }}
      />
      <Text>{name}</Text>
    </View>
  );
};
