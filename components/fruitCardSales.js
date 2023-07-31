import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FruitCardSales({ fruit }) {
  const navigation = useNavigation();
  return (
    <View
      style={{ width: 360, height: 90 }}
      className="flex-row justify-between items-center space-x-5 bg-slate-100 rounded-2xl mr-3"
    >
      <View className="ml-2">
        <View
          style={{ backgroundColor: fruit.color(0.4), height: 70, width: 70 }}
          className={`rounded-3xl flex justify-center items-center`}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Product", {
                ...fruit,
                color: fruit.color(1),
              })
            }
            className="flex-row justify-center shadow-lg z-20"
          >
            <Image
              source={fruit.image}
              style={{
                height: 65,
                width: 65,
                shadowColor: fruit.shadow,
                overflow: "visible",
                shadowRadius: 15,
                shadowOffset: { width: 0, height: 20 },
                shadowOpacity: 0.4,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1 space-y-1">
        <Text className=" text-base font-bold">{fruit.name}</Text>
        <Text className="text-gray-500 font-xl">Fruit</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <Text className="text-yellow-500 font-extrabold text-xl pr-2">
          $ {fruit.price}
        </Text>
      </View>
    </View>
  );
}
