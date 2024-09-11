import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { View, FlatList, ScrollView, Text } from "react-native";
import Header from "@/components/Header";
import Card from "@/components/Card/Content";
import { SafeAreaView } from "react-native-safe-area-context";
import Header2 from "@/components/Header2";
import Card2 from "@/components/Card/Content2";
import { styles } from "@/components/Style";
import HotDeals from "@/components/Card/HotDeals";
import MarketHeader from "@/components/MarketHeader";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const cards = Array.from({ length: 12 }).map((_, index) => ({
    id: index.toString(),
    title: `Card ${index + 1}`,
  }));

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <Card title={item.title} />
  );

  const hotDealsData = Array.from({ length: 12 }).map((_, index) => ({
    id: index.toString(),
    title: `HotDeals${index + 1}`,
  }));

  const renderHotDealsItem = ({
    item,
  }: {
    item: { id: string; title: string };
  }) => <HotDeals title={item.title} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*FEED*/}
      {/* <FlatList
        ListHeaderComponent={<Header />}
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      /> */}

      {/*CONTENT*/}
      {/* <Header2></Header2>
        <View style={{marginTop:"15%"}}>
      <ScrollView>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
      </ScrollView>
        </View> */}

      {/*MARKET*/}
      {/* <Header2></Header2>
      <Text style={{position:"absolute", fontSize:20, marginTop:"49%", marginLeft:"5%"}}>Hot deals</Text>
      <FlatList style={{padding:"4%"}}
        data={hotDealsData}
        renderItem={renderHotDealsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      />
      <Text style={{position:"absolute", fontSize:20, marginTop:"127%", marginLeft:"5%"}}>Trending</Text>
      <FlatList style={{padding:"4%", marginBottom:"25%"}}
        data={hotDealsData}
        renderItem={renderHotDealsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      />
      <View style={styles.footer2}>
        <View style={styles.icon}/>
        <View style={styles.icon1}/>
        <View style={styles.icon2}/>
        <View style={styles.icon3}/>
        <View style={styles.icon4}/>
      </View> */}

        {/*MARKET GREEN*/}
        {/* <MarketHeader/>
        <Text style={{position:"absolute", fontSize:20, marginTop:"95%", marginLeft:"5%"}}>Hot deals</Text>
      <FlatList style={{padding:"4%", marginTop:"-3%"}}
        data={hotDealsData}
        renderItem={renderHotDealsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      />
      <Text style={{position:"absolute", fontSize:20, marginTop:"165%", marginLeft:"5%"}}>Trending</Text>
      <FlatList style={{padding:"4%", marginTop:"7%"}}
        data={hotDealsData}
        renderItem={renderHotDealsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      />
      <View style={styles.footer2}>
        <View style={styles.icon}/>
        <View style={styles.icon1}/>
        <View style={styles.icon2}/>
        <View style={styles.icon3}/>
        <View style={styles.icon4}/>
      </View>  */}

    </SafeAreaView>
  );
}