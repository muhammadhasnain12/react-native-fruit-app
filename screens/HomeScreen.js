import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import FruitCard from "../components/fruitCard";
import { useNavigation } from "@react-navigation/native";
import FruitCardSales from "../components/fruitCardSales";
import { featuredFruits, categories } from "../constants";
import * as Icon from "react-native-feather";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Fruits");
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      {/* top bar */}
      <View className="navbar mx-5 flex-row justify-between items-center">
        <Bars3CenterLeftIcon size="30" color="black" />
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          className="p-2 rounded-xl bg-orange-100"
        >
          <ShoppingCartIcon size="25" color="orange" />
        </TouchableOpacity>
      </View>
      {/* categories */}
      <View className="mt-4">
        <Text
          style={{ color: themeColors.black }}
          className="text-2xl tracking-widest font-extrabold ml-5"
        >
          Explore Fruits & Juices
        </Text>
        <View className="flex-row items-center space-x-2 px-4 pb-2 mt-3">
          <View className="flex-row flex-1 items-center p-3 h-11 rounded-full border-2 border-gray-300">
            <Icon.Search height="25" width="25" color="gray" />
            <TextInput
              placeholder="Search"
              className="ml-2 flex-1 text-gray-60"
            />
          </View>
        </View>

        <ScrollView
          className="mt-5 px-5"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => {
            let isActive = category == activeCategory;
            let textClass = `text-xl   ${isActive ? " font-bold" : ""}`;
            let buttonClass = `mr-8 relative items-center py-0.5 ${
              isActive && "rounded-full border-2 border-slate-800 px-4"
            }`;
            return (
              <TouchableOpacity
                onPress={() => setActiveCategory(category)}
                key={index}
                className={buttonClass}
              >
                <Text style={{ color: themeColors.text }} className={textClass}>
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* carousel */}
      <View className="carousel mt-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit, index) => {
            return <FruitCard fruit={fruit} key={index} />;
          })}
        </ScrollView>
      </View>

      {/* hot sales */}
      <View className="mt-8 pl-5 space-y-1">
        <Text style={{ color: themeColors.text }} className="text-xl font-bold">
          Big Sale
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ overflow: "visible" }}
        >
          {[...featuredFruits].map((fruit, index) => {
            return <FruitCardSales key={index} fruit={fruit} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
