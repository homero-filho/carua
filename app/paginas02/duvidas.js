import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function Apk() {
  const [telefone, setTelefone] = useState();
  const [senha, setSenha] = useState();
  const [input2, setInput2] = useState();
  const [input3, setInput3] = useState();

  return (
    <ScrollView style={styles.container}>
      
      {/* Ícone de seta decorativa */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="white" />
            </TouchableOpacity>

      <Text style={styles.texto}>Perguntas Frequentes</Text>

      <Image
        source={require("../../src/assets/duvida.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setTelefone(value)}
          placeholder=""
          placeholderTextColor="#ADD8E6"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setSenha(value)}
          placeholder=""
          placeholderTextColor="#ADD8E6"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setInput2(value)}
          placeholder=""
          placeholderTextColor="#ADD8E6"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setInput3(value)}
          placeholder=""
          placeholderTextColor="#ADD8E6"
          secureTextEntry
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  backIcon: {
    position: "absolute",
    top: 50,
    left: 20,
  },

  texto: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "roboto",
    color: "#00a8ff",
    marginBottom: 10,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00a8ff',
    paddingHorizontal: 10,
    height: 45,
    marginTop: 12,
    borderRadius: 10,
    width: 300,
  },

  textInput: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});
