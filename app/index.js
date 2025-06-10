
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserProvider } from '../src/assets/context/UserContext';



export default function Principal() {
  return (
    <UserProvider>
      <View style={styles.container}>
        <Image
          source={require("../src/assets/gps.png")}
          style={styles.logo}
        />

        <Text style={styles.texto}> Caruaru Tour </Text>

        <Text style={styles.link}>Seja bem-vindo ao Caruaru Tour!</Text>

        <View style={styles.buttonRow}>
          <Link href={"/paginas01/login"} asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>Acessar Conta</Text>
            </TouchableOpacity>
          </Link>

          <Link href={"/paginas01/cadastro"} asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>Cadastrar Conta</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: 20
  
  },
  
textInput: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10
  },
  link: {
    color: "#0077cc",
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "roboto",
    fontSize: 20
  },
  buttonRow: {
    flexDirection: "column",
    gap: 10
  },
  botao: {
    backgroundColor: "#0077cc",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 10,
    alignItems: "center"
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
logo: {
    marginTop: -150,
    position: "relative",
    width: 200,
    height: 201
},
  texto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0077cc",
    marginBottom: 30,
    textAlign: "center",
  }});
