import { ScrollView, StyleSheet } from "react-native";
import Header from "./Header";
import HeroSection from "./HeroSection";

export default function Cart() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <HeroSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
