import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, FlatList, TextInput } from "react-native";
import { Item, DATA } from "./components/ShoppingItem";

function ShoppingListPage() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textItem}
        onChangeText={"onChangeText"}
        value={"Add New Item To List"}
      />
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  textItem: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    margin: 16,
    fontSize: 24
  }
});

export default ShoppingListPage;