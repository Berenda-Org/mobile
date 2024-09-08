import React, { useEffect } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import SearchProperty from "../../components/SearchProperty";
import { router } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { getDevelopers, getDevelopersById, selectdevelopers } from "../../slices/developerSlice";


const developers = () => {
  const dispatch = useDispatch()
  const developers = useSelector(selectdevelopers)

  useEffect(()=>{
    dispatch(getDevelopers('1'))
  },[])

  return (
    <View className="bg-[#FAFAFB] h-full w-full">
      <SearchProperty placeholder="Search Developers" />
      <View className="flex flex-row flex-wrap justify-between w-full item-center px-4">
        {developers.map((item) => (
          <TouchableOpacity 
          onPress={() =>{ 
            router.push("/developerdetail")
          }
          }>
          <Image
          source={{ uri: item.profilePhoto }}
          className="w-40 h-40 mr-4 mt-3 rounded-[10px]"
          />
          </TouchableOpacity>
          ))}
        <View className="w-40 h-40 bg-highlight rounded-[10px] flex flex-row justify-center items-center">
          <Text className="text-white">
            View all developers
            </Text>
        </View>
      </View>
    </View>
  );
};

export default developers;
