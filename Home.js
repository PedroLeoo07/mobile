import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TextInput placeholder="Digite uma frase..." />
      <TouchableOpacity>
        <Text style={styles.frase}>Depende da frase acima coisas boas acontecem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF1493',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  frase: {
    fontSize: 20,
    fontWeight: 'italic',
    color: 'white',
  },
});