import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Env from "./constants/Env";

export default function App() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get(Env.url.schools)
      .then((result) => result.data)
      .then((data) => setSchools(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text>List des écoles : </Text>
      {schools.map((school) => {
        return <Text>{school}</Text>;
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
