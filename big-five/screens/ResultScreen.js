import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";

const ResultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>
          Your Big Five Results are in!
        </Text>
      </View>
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
    alignItems: 'center'
  }
});

export default ResultScreen;
