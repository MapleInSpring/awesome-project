import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Notification from "./src/containers/notification/Notification";

export default class App extends React.Component {
  render() {
    return (
      <View testID={"home-page"} style={styles.container}>
        <Text>Hello world</Text>
        <Notification/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
