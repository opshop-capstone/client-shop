import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import Navigation from "./navigation";
import { UserProvider } from "./contexts";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <StatusBar backgroundColor={theme.background} barStyle="dark-content" />
        <Navigation />
      </UserProvider>
    </ThemeProvider>
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
