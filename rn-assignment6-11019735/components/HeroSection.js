import { View, Text, Image, StyleSheet } from "react-native";

export default function HeroSection() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.heroSectionHeader}>
        <Text style={styles.ourStory}>OUR STORY</Text>
        <View style={styles.filterAndListContainer}>
          <View style={styles.listContainer}>
            <Image
              style={styles.listView}
              source={require("../assets/Listview.png")}
            />
          </View>
          <View style={styles.filterContainer}>
            <Image
              style={styles.filter}
              source={require("../assets/Filter.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "center",
    top: 80,
    left: -40,
  },
  heroSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
  },
  ourStory: {
    letterSpacing: 2,
    fontSize: 22,
  },
  filterAndListContainer: {
    width: 110,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 30,
  },
  filterContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgray",
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filter: {
    width: 25,
  },

  listContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgray",
    alignItems: "center",
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  listView: {
    width: 25,
  },
});
