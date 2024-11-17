import { useEffect, useState } from "react";
import { PaperProvider, Button, Card, Avatar } from "react-native-paper";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import { getAllChefer, getAllUnits } from "../backend/api";
import MainCard from "@/components/MainCard";
import { StatusBar } from "expo-status-bar";
import Specialist from "./units/specialister/specialistList";
import { Link } from "expo-router";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const LeftContent = (props) => <Avatar.Icon {...props} icon="home" />;

export default function Index() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  loadingContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 17,
    marginVertical: 20,
    backgroundColor: "orange",
    width: 200,
    alignSelf: "center",
  },

  errorText: {
    color: "white",
    fontSize: 24,
    padding: 7,
  },
});
