import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import MainCard from "../../components/MainCard";
import {
  getAllUnits,
  getAllChefer,
  getAllSpecialister,
  getAllWorkplaces,
} from "@/backend/api";
import { ActivityIndicator } from "react-native-paper";

const UnitList = () => {
  const [units, setUnits] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [chef, setChef] = useState({});

  const [specialister, setSpecialister] = useState([]);
  const [workPlaces, setWorkplaces] = useState([]);

  const fetchUnits = async () => {
    try {
      setLoading(true);

      const unitData = await getAllUnits();

      if (!unitData) {
        throw new Error("Data för enhet saknas");
      }

      const chefDataPromises = unitData.map((unit) => getAllChefer(unit._id));
      // const specialistData = unitData.map((unit) =>
      //   getAllSpecialister(unit._id)
      // );

      // console.log("Specialister ", specialistData);

      // const workPlaceData = unitData.map((unit) => getAllWorkplaces(unit._id));
      // console.log("workPlaceData ", workPlaceData);

      if (!chefDataPromises) {
        throw new Error("You are trying to fetch enhet som saknar chef");
      }

      const chefData = await Promise.all(chefDataPromises);

      const unitWithChef = unitData.map((unit, index) => {
        const chef = chefData[index];
        return { ...unit, chef };
      });
      setUnits(unitWithChef);
      console.log("Unit with data", unitWithChef);
      // console.log("Type of data", typeof unitWithChefer);
      const { specialister } = unitWithChef;
      //   console.log("Data from frontend: ", specialister ? "Ok" : "Nothing");

      setLoading(false);
    } catch (error) {
      // console.log("Error", error);
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnits();
    // console.log("UseEffect körs nu");
  }, []);

  if (units.length === 0) {
    return (
      <View>
        <Text>No unit data</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} color={"#222"} />
      </View>
    );
  }

  if (error)
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );

  //   const renderItem = ({ item }) => {
  //     return <MainCard {...item} />;
  //   };
  return (
    <View style={styles.container}>
      <FlatList
        data={units}
        renderItem={({ item }) => <MainCard {...item} />}
        ListHeaderComponent={() => <Text>Enheter</Text>}
        ListEmptyComponent={() => <Text>Finns inget att skrolla</Text>}
        ListFooterComponent={() => <Text>Slut på innehåll</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default UnitList;
