import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Big Five personality test
        </Text>
      </View>
      <Button
        onPress={() => {
          navigation.navigate("Quiz");
        }}
      >
        Start the quiz
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
