import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'gray', height: 100, borderRadius: 4, padding: 8}}>
        <Text>Avialable Balance</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text>₱475.00</Text>
          <Link href='/screens/cashIn' style={{ alignSelf: 'flex-start', backgroundColor: 'lightblue', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8}}>
            <Text>+ Cash In</Text>
          </Link>
        </View>
      </View>
      <View style={{padding: 12, borderWidth: 1, borderColor: 'red', flexDirection: 'row', gap: 12, flexWrap: 'nowrap'}}>
        <Link href='/screens/send' style={{ backgroundColor: 'lightblue', alignSelf: 'flex-start', padding: 12, borderRadius: 4}}>
          <Text>Send</Text>
        </Link>
        <Link href='/screens/send' style={{ backgroundColor: 'lightblue', alignSelf: 'flex-start', padding: 12, borderRadius: 4}}>
          <Text>Load</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16
  },
});
