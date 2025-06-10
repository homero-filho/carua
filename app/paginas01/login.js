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
          placeholder='Email'
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

      <TouchableOpacity style={styles.botao2}>
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

    },

    logo: {
        marginTop: -250,
        position: "relative",
        width: 200,
        height: 201

    },

    texto: {
        fontSize: 50,
        position: "absolute",
        top: 10,
        fontWeight: "bold",
        color: "#00a8ff",
        fontStyle: "italic"
    },

    texto1: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "roboto",
        color: "#F8F8FF"
    },

    input: {
        backgroundColor: "#00a8ff",
        padding: 10,
        height: 45,
        marginTop: 10,
        borderRadius: 10,
        fontWeight: "bold",
        fontSize: 20,
        width: 300








    },
    

    botao1: {
        fontFamily: "roboto",
        fontSize: 22,
        fontWeight: "bold",
        color: "#F8F8FF"
    },

    botao: {
        alignItems: "center",
        backgroundColor: "#00a8ff",
        padding: 10,
        width: "50%",
        height: 45,
        marginTop: 200,
        borderRadius: 10,
        fontWeight: "bold",
        fontSize: 20

    },

    botao2: {
        color: "#00a8ff",
        fontFamily: "roboto",
        fontWeight: "bold",
        marginBottom: -150
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00a8ff',
        paddingHorizontal: 10,
        height: 45,
        marginTop: 10,
        borderRadius: 10,
        width: 300
    },

    icon: {
        width: 24,
        height: 24,
        marginRight: 10
    }









})











