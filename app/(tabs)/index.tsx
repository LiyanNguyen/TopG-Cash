import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'blue', height: 100, borderRadius: 4, padding: 8}}>
        <Text>Avialable Balance</Text>
        <Text>₱475.00</Text>
      </View>
      <Text>THis is Home page</Text>
      <Link href='/screens/modal'>
        <Text>open Modal</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
