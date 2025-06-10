import { useRouter } from 'expo-router';
import api from '../api/axios/api';

import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  async function validarLogin() {
    if (!nome || !email || !senha || !confirmaSenha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    if (senha !== confirmaSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      const response = await api.post("/usuarios", {
        nome,
        email,
        senha,
        confirmaSenha
      });

      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      router.push("/paginas01/login"); // redireciona para login

    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao cadastrar usuário.");
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../src/assets/gps.png")}
        style={styles.logo}
      />

      <Text style={styles.texto}> Caruaru Tour </Text>

      <View style={styles.inputContainer}>
        <Image source={require('../../src/assets/user.png')} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          onChangeText={setNome}
          placeholder='Nome'
          placeholderTextColor={"#ADD8E6"}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../src/assets/user.png')} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          placeholder='E-mail'
          placeholderTextColor={"#ADD8E6"}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../src/assets/senha.png')} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          onChangeText={setSenha}
          placeholder='Senha'
          placeholderTextColor={"#ADD8E6"}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../src/assets/senha.png')} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          onChangeText={setConfirmaSenha}
          placeholder='Confirmar Senha'
          placeholderTextColor={"#ADD8E6"}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={validarLogin}>
        <Text style={styles.botao1}>Criar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao2} onPress={() => router.push("/paginas01/login")}>
        <Text style={styles.botao2}>Já possui conta? Acesse aqui</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },

  texto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0077cc",
    marginBottom: 30,
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00a8ff',
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 10
  },

  textInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  botao: {
    alignItems: "center",
    backgroundColor: "#0077cc",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 30,
    width: '100%',
  },

  botao1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },

  botaoTextoSecundario: {
    marginTop: 20,
    color: "#0077cc",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});