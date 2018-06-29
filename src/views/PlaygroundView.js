import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import Notification from "../containers/notification/Notification";

export default class PlaygroundView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Notification/>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
});
