import * as React from "react";
import { Image, StyleSheet, Text, View} from "react-native";

const StudentLogin = () => {
  return (
    
    <View style={styles.welcomeLoginView}>
      <Image
        style={styles.undrawChoosingHouseRe1rv7Icon}
        resizeMode="cover"
        source={require("../../assets/undrawChoosingHouseRe1rv7Icon.png")}
      />
      <Text style={styles.welcomeBackText1}>
        <Text style={styles.welcomeBackText}>Welcome back</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <Text style={styles.signInText}>sign in</Text>
      <View style={styles.rectangleView2} />
      <Text style={styles.yourEmailText}>Your email</Text>
      <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      <Text style={styles.passwordText}>Password</Text>
      <Text style={styles.orText}>{`or `}</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../../assets/Vector.png")}
      />
      <Text
        style={styles.dontHaveAnyAccount}
      >{`Don’t have any account ? `}</Text>
      <Text style={styles.signUpText1}>
        <Text style={styles.signUpText}>sign up</Text>
        <Text style={styles.text1}>{`  `}</Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../assets/Ellipse 11.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../../assets/Ellipse 12.png")}
      />
      <Image
        style={styles.userAltIcon}
        resizeMode="cover"
        source={require("../../assets/user-alt.png")}
      />
        <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../../assets/Vector12.png")}
      />
       <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../../assets/Group 2.png")}
      />
      <Image
        style={styles.facebook1Icon}
        resizeMode="cover"
        source={require("../../assets/facebook 1.png")}
      />
    </View>
    
  
  );
};

const styles = StyleSheet.create({
  undrawChoosingHouseRe1rv7Icon: {
    position: "absolute",
    top: 146,
    left: 82,
    width: 237,
    height: 175,
    overflow: "hidden",
  },
  welcomeBackText: {
    fontSize: 24,
  },
  text: {
    fontSize: 20,
  },
  welcomeBackText1: {
    position: "absolute",
    top: 360,
    left: 126,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#696969",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 419,
    left: 33,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 310,
    height: 51,
  },
  rectangleView1: {
    position: "absolute",
    top: 618,
    left: 34,
    borderRadius: 13,
    backgroundColor: "#3f424a",
    width: 310,
    height: 51,
  },
  signInText: {
    position: "absolute",
    top: 630,
    left: 155,
    fontSize: 24,
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 508,
    left: 34,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 310,
    height: 51,
  },
  yourEmailText: {
    position: "absolute",
    top: 439,
    left: 66,
    fontSize: 14,
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  forgetPasswordText: {
    position: "absolute",
    top: 573,
    left: 236,
    fontSize: 14,
    fontFamily: "Lato",
    color: "#0092bf",
    textAlign: "left",
  },
  passwordText: {
    position: "absolute",
    top: 526,
    left: 66,
    fontSize: 14,
    fontFamily: "Lato",
    color: "#a1a1a1",
    textAlign: "left",
  },
  orText: {
    position: "absolute",
    top: 733,
    left: 183,
    fontSize: 20,
    fontFamily: "Lato",
    color: "#696969",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    height: "1.96%",
    width: "6.36%",
    top: "58.85%",
    right: "16.28%",
    bottom: "36.19%",
    left: "73.35%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dontHaveAnyAccount: {
    position: "absolute",
    top: 695,
    left: 96,
    fontSize: 14,
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  signUpText: {
    color: "#0092bf",
  },
  text1: {
    color: "#000",
  },
  signUpText1: {
    position: "absolute",
    top: 695,
    left: 269,
    fontSize: 14,
    fontFamily: "Lato",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 36,
    left: 0,
    width: 75,
    height: 80,
  },
  userAltIcon: {
    position: "absolute",
    top: 437,
    left: 41,
    width: 17,
    height: 17,
    overflow: "hidden",
  },
  vectorIcon1: {
    position: "absolute",
    height: "2.35%",
    width: "4.58%",
    top: "58.03%",
    right: "84.99%",
    bottom: "36.62%",
    left: "10.43%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon: {
    position: "absolute",
    height: "7.04%",
    width: "33.08%",
    top: "90.38%",
    right: "34.86%",
    bottom: "2.58%",
    left: "32.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  facebook1Icon: {
    position: "absolute",
    top: 782,
    left: 141,
    width: 30,
    height: 30,
  },
  welcomeLoginView: {
    position: "relative",
    backgroundColor: "#dfe8ea",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default StudentLogin;
