import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DATA = [
	{
		title: "Eggs",
    key: "1"
	},
	{
		title: "Bacon",
    key: "2"
	}
];
	
const Item = ({title}) => (
<View style={styles.item}>
  <Text style={styles.title}>{title}</Text>
</View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#7ABACC",
    borderRadius: 10,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export {Item};
export {DATA};