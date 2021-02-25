//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { likeIcon, commentIcon } from "../../assets/icons";

const HomePostComponent = ({ item, navigation }) => {
  const [iconsOpened, setIconsOpened] = useState(false);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (iconsOpened) {
          setIconsOpened(false);
        }
      }}
    >
      <View style={styles.header}>
        <Image source={item.avatar} style={styles.headerImage} />
        <View style={styles.headerTop}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.headerBottom}>
            <Text style={styles.date}>4 months ago</Text>
            <Text style={styles.location}>{item.address}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardBody}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PostDetailScreen");
          }}
        >
          <Text style={styles.postText}>{item.text}</Text>
        </TouchableOpacity>
        <Image source={item.postImage} style={styles.postImage} />
      </View>

      {iconsOpened ? (
        <View style={styles.reactionContainer}>
          <Image source={likeIcon} style={styles.reactionIcon} />
          <Image source={likeIcon} style={styles.reactionIcon} />
          <Image source={likeIcon} style={styles.reactionIcon} />
          <Image source={likeIcon} style={styles.reactionIcon} />
          <Image source={likeIcon} style={styles.reactionIcon} />
        </View>
      ) : null}

      <View style={styles.cardFooter}>
        <TouchableOpacity
          onLongPress={() => {
            setIconsOpened(true);
          }}
        >
          <Image source={likeIcon} style={styles.footerIcon} />
        </TouchableOpacity>
        <Text style={styles.footerCount}>{item.likeCount}</Text>
        <Image source={commentIcon} style={styles.footerIcon} />
        <Text style={styles.footerCount}>{item.commentCount}</Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
  },
  headerImage: {
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  header: {
    // backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",
  },
  headerBottom: {
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  date: {
    color: "grey",
    fontSize: 12,
    marginRight: 30,
  },
  location: {
    color: "grey",
    fontSize: 12,
  },
  postImage: {
    resizeMode: "cover",
    width: "100%",
    height: 200,
    marginVertical: 20,
  },
  postText: {
    fontSize: 14,
    textAlign: "justify",
    marginTop: 20,
  },
  cardBody: {
    // backgroundColor: "red",
  },
  footerIcon: {
    resizeMode: "contain",
    height: 25,
    width: 25,
    marginRight: 5,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerCount: {
    marginRight: 25,
  },
  reactionIcon: {
    resizeMode: "contain",
    height: 30,
    width: 30,
    marginRight: 5,
  },
  reactionContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 65,
    paddingVertical: 5,
  },
});

//make this component available to the app
export default HomePostComponent;

// if(a=3){ a=b} else {b=a}

// a = 3 ? a = b : b = a
