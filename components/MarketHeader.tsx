import React from "react";
import { styles } from "./Style";
import { View, Text, TextInput } from "react-native";

const MarketHeader = () => {
  return (
    <View style={styles.topContainer2}>
      <Text style={styles.back2}>Back</Text>
      <Text style={styles.cont2}>Market</Text>
      <Text style={styles.filter}>Filter</Text>
      <View style={styles.video}></View>
      {/* <View style={styles.search}>
        <TextInput value="Search" style={styles.searchbar} />
      </View> */}
    </View>
  );
};

export default MarketHeader;