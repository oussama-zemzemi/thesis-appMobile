import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.introView}>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/intro/Ellipse1.png")}
      />
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("OwnerLoginForm")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/intro/Group8.png")}
        />
      </Pressable>
      <Text style={styles.studentText}>student</Text>
      <Text style={styles.houseOwnerText}>House owner</Text>
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("Intro")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/intro/Vector.png")}
        />
      </Pressable>
      <Text style={styles.helloThisOurFirstApplicati}>
        <Text style={styles.helloThisOurContainer}>
          <Text
            style={styles.helloThisOur}
          >{`Hello this our first application to `}</Text>
          <Text
            style={styles.helpStudentsFor}
          >{`help students for a better `}</Text>
          <Text style={styles.experinceInTheir}>
            experince in their university
          </Text>
          <Text style={styles.lifeAndProvide}>
            {" "}
            life and provide them with a interface for renting
          </Text>
        </Text>
      </Text>
      <Image
        style={styles.aaa1Icon}
        resizeMode="cover"
        source={require("../assets/intro/aaa1.png")}
      />
      <Pressable
        style={styles.groupPressable1}
        onPress={() => navigation.navigate("StudentLogin")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/intro/Group7.png")}
        />
      </Pressable>
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
  icon: {
    width: "100%",
    height: "100%",
  },
  groupPressable: {
    position: "absolute",
    left: 217,
    top: 485,
    width: 141,
    height: 136,
  },
  studentText: {
    position: "absolute",
    top: 630,
    left: 27,
    fontSize: 16,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#636363",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 123,
    height: 29,
  },
  houseOwnerText: {
    position: "absolute",
    top: 632,
    left: 234,
    fontSize: 16,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#636363",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 107,
    height: 25,
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "4.36%",
    top: "2.11%",
    right: "91.03%",
    bottom: "94.6%",
    width: "4.62%",
    height: "3.29%",
  },
  helloThisOur: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  helpStudentsFor: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  experinceInTheir: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  lifeAndProvide: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  helloThisOurContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  helloThisOurFirstApplicati: {
    position: "absolute",
    top: 372,
    left: 68,
    fontSize: 16,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 264,
    height: 77,
  },
  aaa1Icon: {
    position: "absolute",
    top: 124,
    left: 122,
    width: 159,
    height: 140,
  },
  icon2: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupPressable1: {
    position: "absolute",
    left: "4.62%",
    top: "56.31%",
    right: "57.18%",
    bottom: "27.62%",
    width: "38.21%",
    height: "16.07%",
  },
  introView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Intro;
