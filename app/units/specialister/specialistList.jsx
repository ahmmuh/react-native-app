import { useRouter } from "expo-router";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const SpecialistList = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon={"folder"} />;
  const router = useRouter();

  // const { specialister, id } = router.query.specialister;

  // const specialList = specialister ? JSON.parse(specialister) : [];
  // console.log("Router query:", specialister);

  // const specialister = router.query.specialister
  //   ? JSON.parse(router.query.specialister)
  //   : [];

  // console.log("Specialister from Specialist component", specialister);

  return (
    <>
      {/* {specialister && specialister.length > 0 ? (
        specialister.map((specialist) => (
          <Card key={specialist._id}>
            <Card.Title
              title={specialist.name}
              subtitle={specialist.phone}
              left={LeftContent}
            />
            <Card.Content>
              <Text variant="titleLarge">{specialist.email}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        ))
      ) : (
        <Text>No specialists available</Text>
      )} */}
      <Text>Specialister</Text>
    </>
  );
};

export default SpecialistList;
