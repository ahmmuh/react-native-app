import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

import UnitList from "./units/UnitList";
import SpecialistList from "./units/specialister/specialistList";
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About Page</Text>
    </View>
  );
};

export default function RootLayout() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="UnitList">
      <Stack.Screen name="UnitList" component={UnitList} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Specialist" component={SpecialistList} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
