import React from "react";
import {Button} from "react-native";
import NativeToast from "../../native-functions/android/NativeToast";

const AlertButton = (props) =>
  (
    <Button
      onPress={() => {
        NativeToast.show(props.message, NativeToast.LONG);
      }}
      title={props.title}
    />
  );

export default AlertButton;
