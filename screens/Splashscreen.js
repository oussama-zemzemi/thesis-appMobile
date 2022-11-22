import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splashscreenView}>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/Splashscreen/Ellipse 1.png")}
      />
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Intro")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.getStartedText}>Get Started!</Text>
      </Pressable>
      <Image
        style={styles.unsplashjCEpN62oWL4Icon}
        resizeMode="cover"
        source={require("../assets/Splashscreen/unsplash_jCEpN62oWL4.png")}
      />
    
      <Image
        style={styles.aaa2Icon}
        resizeMode="cover"
        source={require("../assets/Splashscreen/aaa 2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    position: "absolute",
    top: 275,
    left: 0,
    width: 892,
    height: 892,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "rgba(63, 66, 74, 0.8)",
    width: 250,
    height: 60,
  },
  getStartedText: {
    position: "absolute",
    top: 19,
    left: 29,
    fontSize: 33,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  groupPressable: {
    position: "absolute",
    top: 722,
    left: 70,
    width: 250,
    height: 60,
  },
  unsplashjCEpN62oWL4Icon: {
    position: "absolute",
    top: 331,
    left: 0,
    borderRadius: 83,
    width: 466,
    height: 376,
  },
  aaa2Icon: {
    position: "absolute",
    top: 120,
    left: 200,
    width: 159,
    height: 140,
  },
  splashscreenView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Splashscreen;