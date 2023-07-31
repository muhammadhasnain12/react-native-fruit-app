import React from "react";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Layout({ children }) {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-yellow-200">
      <SafeAreaView className="flex">
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/login2.png")}
            style={{ width: "100%" }}
          />
        </View>
      </SafeAreaView>
      {children}
    </View>
  );
}
