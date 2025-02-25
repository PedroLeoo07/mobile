import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Details from './Details';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>My App</Text>
      <StatusBar style="auto" />
      <Home />
      <Details />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF1493',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
