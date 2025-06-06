import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Principal() {
  return (
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
    color: "#00a8ff",
    marginBottom: 20,
    ontWeight: "bold",
    fontFamily: "roboto",
    fontSize: 20
  },
  buttonRow: {
    flexDirection: "column",
    gap: 10
  },
  botao: {
    backgroundColor: "#00a8ff",
    paddingVertical: 10,
    paddingHorizontal: 30,
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
    width: 280,
    height: 281

  },

  texto:{
     fontSize: 50,
    position: "absolute",
    top: 10,
    fontWeight: "bold",
    color: "#00a8ff",
    fontStyle: "italic"
  }
});

