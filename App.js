import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hola}>¡Hola Mundo!</Text>
      <Text>¡Qué emoción es mi primera app!</Text>
      <Text style={styles.ahora}>¿Y ahora qué hago?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ahora: {
    fontSize: 25,
    color: "red",
  },
  hola: {
    fontSize: 35,
    color: "red",
    fontWeight: "bold"
  }
});
