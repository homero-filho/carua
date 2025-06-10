import { useRouter } from 'expo-router';
import { useState, useContext } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../api/axios/api';

import { UserContext } from '../../src/assets/context/UserContext';


export default function Login() {

    

  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function validarLogin() {
    if (!email || !senha) {
      alert('Por favor, preencha email e senha');
      return;
    }

    try {
      const response = await api.post('/usuarios/login', {
        email: email,
        senha: senha
      });

      // Supondo que a resposta retorna os dados do usuário
      const usuarioLogado = response.data;

      // Salva os dados do usuário no contexto
      setUser(usuarioLogado);

      alert('Login realizado com sucesso!');
      router.push('/paginas03/pontos'); // navega para tela principal
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Usuário ou senha inválidos');
      } else {
        alert('Erro ao conectar com o servidor');
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../src/assets/gps.png")} style={styles.logo} />

      <Text style={styles.texto}> Caruaru Tour </Text>

      <View style={styles.inputContainer}>
        <Image source={require('../../src/assets/user.png')} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          placeholder='E-mail'
          placeholderTextColor={"#ADD8E6"}
          value={email}
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
          value={senha}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={validarLogin}>
        <Text style={styles.botao1}> Acessar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao2}  onPress={() => router.push("/paginas01/cadastro")}>
        <Text style={styles.botao2}> Ainda não possui uma conta? Cadastre-se aqui</Text>
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











