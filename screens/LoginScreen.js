import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Layout from "./Layout";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    username = data.email;
    password = data.password;

    console.log("data", data);
    if (username === "hasnain@gmail.com" && password == 123) {
      console.log("username", username);
      console.log("usernpasswordame", password);
      navigation.navigate("Home");
    }
  };

  return (
    <Layout>
      <View
        className="flex-1 bg-purple-50 px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3 h-12"
            value={data.email}
            onChangeText={(text) => setData({ ...data, email: text })}
            placeholder="Enter Email"
          />

          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            secureTextEntry={true}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl h-12"
            onChangeText={(text) => setData({ ...data, password: text })}
            value={data.password}
            placeholder="Enter password"
          />
          <TouchableOpacity className="flex items-end mb-3">
            <Text className="text-gray-700">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="py-3 bg-yellow-200 rounded-xl h-12"
            // onPress={() => handleSubmit()}
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="font-xl font-bold text-center text-gray-700">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-9 h-9"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/apple.png")}
              className="w-9 h-9"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/facebook.png")}
              className="w-9 h-9"
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text className="font-semibold text-yellow-400 pl-1">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
