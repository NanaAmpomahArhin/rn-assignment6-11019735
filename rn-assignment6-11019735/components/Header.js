import { View, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <Image source={require("../assets/Menu.png")} style={styles.menu} />
      <Image source={require("../assets/Logo.png")} style={styles.logo} />
      <View style={styles.searchAndBagContainer}>
        <Image source={require("../assets/Search.png")} style={styles.search} />
        <Image
          source={require("../assets/shoppingBag.png")}
          style={styles.shopping}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 40,
  },
  menu: {
    width: 30,
    height: 30,
    left: 20,
  },
  logo: {
    width: 100,
    height: 40,
    left: 15,
  },
  searchAndBagContainer: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
    right: 20,
  },
  search: {
    width: 30,
    height: 30,
  },
  shopping: {
    width: 30,
    height: 30,
  },
});
