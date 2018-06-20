import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import NativeToast from './src/native-functions/android/NativeToast';
import CalendarManager from './src/native-functions/ios/NativeCalendar';

export default class App extends React.Component {
  render() {
    return (
      <View testID={"home-page"} style={styles.container}>
        <Text>Hello world</Text>
        <Button
          onPress={() => {
            NativeToast.show('Awesome', NativeToast.LONG);
          }}
          title="Press Me"
        />

        <Button
          onPress={() => {
            CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', new Date().getTime());
          }}
          title="Add Event"
        />
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
