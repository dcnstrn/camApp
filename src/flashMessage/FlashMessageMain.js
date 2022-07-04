import { View, Button } from "react-native";
import { showMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";

export default function FlashMessageMain() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View>
        <Button
          onPress={() => {
            showMessage({
              message: "Simple message",
              type: "info",
            });
          }}
          title="Simple message"
          color="#841584"
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          onPress={() => {
            showMessage({
              message: "Hello World",
              description: "This is our second message",
              type: "success",
            });
          }}
          title="Success message"
          color="green"
        />
      </View>
      <FlashMessage position="top" />
    </View>
  );
}
