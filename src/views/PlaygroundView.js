import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Notification from "../containers/notification/Notification";

const PlaygroundView = () => (
  <View style={styles.container}>
    <Text>Hello world</Text>
    <Notification/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
});

export default PlaygroundView;
