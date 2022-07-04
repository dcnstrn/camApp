import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import ApplePay from "./ApplePay";

const BottomSheetApp = () => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["40%"];

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isOpen ? "#00000090" : "#fff" },
      ]}
    >
      <Text style={styles.subtitle}>{new Date().toString().slice(0, 11)}</Text>
      <Text style={styles.title}>Today</Text>
      <View style={styles.shadow}>
        <Image
          style={[styles.image, { opacity: isOpen ? 0.2 : 1 }]}
          source={{
            uri: "https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSnapPress(0)}
      >
        <Text style={{ color: "#0080FB", fontSize: 16, fontWeight: "600" }}>
          GET
        </Text>
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetView>
          <ApplePay />
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 32,
    textAlign: "left",
    margin: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
    color: "#aaa",
    fontWeight: "500",
  },
  image: {
    width: "90%",
    height: 400,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 20,
  },
  shadow: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.55,
    shadowRadius: 6.84,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#f4f4f4",
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
  },
});

export default BottomSheetApp;
