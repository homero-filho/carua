import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Duvidas() {
  const [telefone, setTelefone] = useState();
  const [senha, setSenha] = useState();
  const [input2, setInput2] = useState();
  const [input3, setInput3] = useState();

  const router = useRouter();

  function validarLogin() {


    }

  return (
    <View style={styles.container}>
    

      <Text style={styles.texto}>Perguntas Frequentes</Text>

      <Image
        source={require("../../src/assets/duvida.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      
      
        <TouchableOpacity style={styles.botao2} />
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/paginas02/modal1')}>
        <Text style={styles.botao1}>Quem somos?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao2} />
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/paginas02/modal2')}>
        <Text style={styles.botao1}>O app funciona offline?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao2} />
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/paginas02/modal3')}>
        <Text style={styles.botao1}>A cidade é segura para turistas?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao2} />
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/paginas02/modal4')}>
        <Text style={styles.botao1}>O aplicativo terá atualizações?</Text>
      </TouchableOpacity>


      


      
    </View>
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
    backgroundColor:"#3FA9F5",
    borderRadius: 8,
    width: 40,
    height: 40,
   justifyContent: 'center',
    alignItems: 'center',
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
        width: "110%",
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
        marginBottom: -180
    },
});
