import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
export default function Telefone() {


  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.titulo}>Contatos</Text>

      <Image
        source={require("../../src/assets/contato.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.caixaContato}>
        <Text style={styles.textoContato}>Telefone de Contato:</Text>
        <Text style={styles.textoInfo}>(81) 98578-0861</Text>
      </View>

      <View style={styles.caixaContato}>
        <Text style={styles.textoContato}>Email de Contato:</Text>
        <Text style={styles.textoInfo}>caruarutour@gmail.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ADD8E6",
    paddingTop: 50,
    alignItems: "center",
  },
  seta: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: "#3FA9F5", 
    borderRadius: 8
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00a8ff",
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  caixaContato: {
    backgroundColor: "#00a8ff",
    padding: 15,
    borderRadius: 10,
    width: 300,
    marginBottom: 20,
  },
  textoContato: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textoInfo: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
});
