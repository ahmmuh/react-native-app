import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { Alert, StyleSheet, View } from "react-native";
import SpecialistList from "@/app/units/specialister/specialistList";
import { useFocusEffect, useNavigation } from "expo-router";
import TaskList from "@/app/units/tasks/TaskList";
import WorkplaceList from "@/app/units/workplaces/WorkplaceList";
import { getAllSpecialister, getAllUnits } from "@/backend/api";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MainCard = ({ name, chef, specialister, tasks, workPlaces }) => {
  const [selectedSpecialister, setSelectedSpecialister] = React.useState([]);

  const navigation = useNavigation();
  const taskHandler = (task) => {
    return <TaskList {...task} />;
  };
  const specialistHandler = (specialister) => {
    if (specialister && specialister.length > 0) {
      setSelectedSpecialister(specialister);
      console.log("Specialister", specialister);
      navigation.navigate("Specialist", {
        specialister: selectedSpecialister,
        id: 100,
      });
    } else {
      console.log("Inga Specialister");
    }
  };

  const workplaceHandler = (works) => {
    return <WorkplaceList {...works} />;
  };

  React.useEffect(() => {
    console.log("selectedSpecialister", selectedSpecialister);
  }, [selectedSpecialister]);
  // console.log("Chef", chef);
  return (
    <View style={styles.container}>
      <Card
        style={{
          margin: 10,
          padding: 10,
        }}>
        <Card.Title
          title={name}
          style={{
            marginVertical: 10,
            fontSize: 26,
            fontWeight: "bold",
          }}
          left={LeftContent}
        />

        <Card.Content
          style={{
            padding: 15,
          }}>
          <Text style={{ fontSize: 26 }}>Chef: {chef.name}</Text>
          <Text>Telefon: </Text>
          <Text>E-post: </Text>
        </Card.Content>

        <Card.Cover source={{ uri: "https://picsum.photos/300" }} />
        <Card.Actions
          style={{
            marginVertical: 10,
          }}>
          <Button
            onPress={() =>
              navigation.navigate("Specialist", {
                specialister: JSON.stringify(specialister),
                id: 100,
              })
            }>
            Specialist {specialister && specialister.length}
          </Button>
          <Button onPress={() => specialistHandler(specialister)}>
            {" "}
            Att göra: {tasks.length}
          </Button>
          <Button
            onPress={() => Alert.alert("Workplaces")}
            style={{ width: 30, height: 40 }}>
            Mina objekt: {workPlaces.length}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flx: 1,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
  },
  cardCover: {
    height: 200, // Custom height for the cover image
  },
});

export default MainCard;
