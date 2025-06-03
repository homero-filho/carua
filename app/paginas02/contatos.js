import { View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Ícone de seta

export default function Contato() {
  return (
    <View style={styles.container}>

      {/* Seta estética no canto superior esquerdo */}
      <AntDesign name="arrowleft" size={28} color="black" style={styles.seta} />

      <Text style={styles.titulo}>Contatos</Text>

      <Image
        source={require("../../src/assets/contato.png")} // Substitua pelo seu ícone
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Caixa 1: Telefone */}
      <View style={styles.caixaContato}>
        <Text style={styles.textoContato}>Telefone de Contato:</Text>
        <Text style={styles.textoInfo}>(99) 9999-9999</Text>
      </View>

      {/* Caixa 2: Email */}
      <View style={styles.caixaContato}>
        <Text style={styles.textoContato}>Email de Contato:</Text>
        <Text style={styles.textoInfo}>exemplo@email.com</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    paddingTop: 50,
    alignItems: "center",
  },

  seta: {
    position: "absolute",
    top: 40,
    left: 20,
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
