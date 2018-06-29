import React from 'react';
import {Text, View} from "react-native";
import Notification from "../containers/notification/Notification";

const Playground = () => (
  <View testID={"home-page"} style={styles.container}>
    <Text>Hello world</Text>
    <Notification/>
  </View>
);

export default Playground;
