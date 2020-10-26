import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        style={styles.inputStyle}
        placeholder="Search"
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 15,
    marginBottom:10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
