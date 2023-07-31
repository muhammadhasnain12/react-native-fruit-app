import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { ArrowLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import * as Icon from "react-native-feather";

export default function FruitCard({ fruit }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <View
      style={{ width: 160, borderRadius: 20, backgroundColor: fruit.color(1) }}
      className={`mx-5`}
    >
      <View className="ml-4 my-4">
        <Text className="font-bold text-md text-black shadow">
          {fruit.name}
        </Text>
        <Text className="font-bold text-sm text-black shadow tracking-wide  ">
          $ {fruit.price}
        </Text>
      </View>
      {/* <View className="flex-row justify-end">
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          className="p-3 rounded-full mr-4 mt-4"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <HeartIcon size="25" color={isFavourite ? fruit.shadow : "white"} />
        </TouchableOpacity>
      </View> */}
      <View
        className="flex-row justify-center"
        style={{
          shadowColor: fruit.shadow,
          shadowRadius: 40,
          shadowOffset: { width: 0, height: 50 },
          shadowOpacity: 0.6,
        }}
      >
        <Image source={fruit.image} style={{ width: 150, height: 150 }} />
      </View>

      <View className="flex-row justify-end">
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          style={{ backgroundColor: fruit.shadow }}
          className="p-2 rounded-tl-2xl rounded-br-2xl ml-4"
        >
          {!isFavourite ? (
            <Icon.Plus height="25" width="25" color="white" />
          ) : (
            <Icon.Check height="25" width="25" color="white" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
