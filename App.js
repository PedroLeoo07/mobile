import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from "./pages/Detalhes"; 

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState("");
  const [persistedText, setPersistedText] = useState("");

  useEffect(() => {
    loadPersistedText();
  }, []);

  const loadPersistedText = async () => {
    const savedText = await AsyncStorage.getItem("savedText");
    if (savedText) {
      setPersistedText(savedText);
    }
  };

  const handleSave = async () => {
    await AsyncStorage.setItem("savedText", inputText);
    setPersistedText(inputText);
  };

  const handleClear = async () => {
    await AsyncStorage.removeItem("savedText");
    setPersistedText("");
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Persistência e Navegação</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={inputText}
        onChangeText={setInputText}
      />
      <Text style={styles.warningText}>
        Sem persistência: {inputText || "Nenhum texto salvo"}
      </Text>
      <Text style={styles.successText}>
        Texto persistido: {persistedText || "Nenhum texto salvo"}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleClear}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => navigation.navigate("Detalhes", { persistedText })}
      >
        <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FFF",
    marginBottom: 10,
  },
  warningText: {
    color: "green",
    fontSize: 16,
  },
  successText: {
    color: "green",
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    width: "90%",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});