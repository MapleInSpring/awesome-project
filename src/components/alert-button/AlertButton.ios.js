import React from "react";
import {Button} from "react-native";
import CalendarManager from '../../native-functions/ios/NativeCalendar'

const AlertButton = (props) => (
  <Button
    onPress={() => {
      CalendarManager.addEvent('Alert', props.message, new Date().getTime());
    }}
    title={props.title}
  />
);

export default AlertButton;
